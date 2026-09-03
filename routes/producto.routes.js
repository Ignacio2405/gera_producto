import { Router } from 'express';

import {
  crearProducto,
  obtenerProductos,
  obtenerProductoPorId,
  actualizarProducto,
  eliminarProducto
} from '../controllers/producto.controller.js';

const router = Router();

// Rutas principales (/api/productos)
router.post('/', crearProducto);
router.get('/', obtenerProductos);

// Rutas con parámetro ID (/api/productos/:id)
router.get('/:id', obtenerProductoPorId);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;