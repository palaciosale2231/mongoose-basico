import { ClientModel } from "../models/client.model.js";
import { ProductModel } from "../models/product.model.js";

export const createClient = async (req, res) => {
  try {
    const newClient = await ClientModel.create(req.body);
    return res.status(201).json({
      msg: "Cliente creado correctamente",
      data: newClient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getAllClients = async (req, res) => {
  try {
    // Populate de la relación N:M
    const clients = await ClientModel.find().populate("favoriteProducts");
    return res.status(200).json({ data: clients });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const getClientById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await ClientModel.findById(id).populate("favoriteProducts");

    if (!client) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }

    return res.status(200).json({ data: client });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await ClientModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedClient) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }

    return res.status(200).json({
      msg: "Cliente actualizado correctamente",
      data: updatedClient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await ClientModel.findByIdAndDelete(id);

    if (!deletedClient) {
      return res.status(404).json({ msg: "Cliente no encontrado" });
    }

    return res.status(200).json({
      msg: "Cliente eliminado correctamente",
      data: deletedClient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};

// ==========================================================
// ENDPOINT ESPECIAL N:M: Agregar producto favorito al cliente
// Cumple con el punto 3: Agregar un nuevo vínculo en una relación N:M
// ==========================================================
export const addFavoriteProduct = async (req, res) => {
  try {
    const { clientId, productId } = req.params;

    // 1. Verificar que existan ambos documentos
    const client = await ClientModel.findById(clientId);
    const product = await ProductModel.findById(productId);

    if (!client || !product) {
      return res.status(404).json({ msg: "Cliente o Producto no encontrado" });
    }

    // 2. Actualizar ambos lados usando $addToSet para evitar duplicados
    const updatedClient = await ClientModel.findByIdAndUpdate(
      clientId,
      { $addToSet: { favoriteProducts: productId } },
      { new: true }
    ).populate("favoriteProducts");

    await ProductModel.findByIdAndUpdate(
      productId,
      { $addToSet: { wishlistedBy: clientId } },
      { new: true }
    );

    return res.status(200).json({
      msg: "Vínculo N:M agregado correctamente",
      data: updatedClient,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Error interno del servidor" });
  }
};