import { Producto } from '../models/producto.js';

// Crear un nuevo producto
export const crearProducto = async (req, res) => {
  try {
    const nuevoProducto = new Producto(req.body);
    const productoGuardado = await nuevoProducto.save();

    res.status(201).json(productoGuardado);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el producto",
      detalle: error.message
    });
  }
};

// Obtener todos los productos (con datos de proveedor poblados)
export const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error del servidor",
      detalle: error.message
    });
  }
};

// Obtener un producto por ID
export const obtenerProductoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id);

    if (!producto) {
      return res.status(404).json({
        mensaje: "Producto no encontrado"
      });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(400).json({
      mensaje: "ID inválido o error en la petición",
      detalle: error.message
    });
  }
};

// Actualizar un producto por ID
export const actualizarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const datosNuevos = req.body;

    const productoActualizado = await Producto.findByIdAndUpdate(
      id,
      datosNuevos,
      { new: true, runValidators: true }
    );

    if (!productoActualizado) {
      return res.status(404).json({
        mensaje: "Producto no encontrado para actualizar"
      });
    }

    res.status(200).json(productoActualizado);
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al actualizar el producto",
      detalle: error.message
    });
  }
};

// Eliminar un producto por ID
export const eliminarProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const productoEliminado = await Producto.findByIdAndDelete(id);

    if (!productoEliminado) {
      return res.status(404).json({
        mensaje: "Producto no encontrado para eliminar"
      });
    }

    res.status(200).json({
      mensaje: "Producto eliminado correctamente",
      producto: productoEliminado
    });
  } catch (error) {
    res.status(400).json({
      mensaje: "ID inválido o error al eliminar",
      detalle: error.message
    });
  }
};