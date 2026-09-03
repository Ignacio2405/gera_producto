import { Router } from 'express';

import {
    crearProveedor,
    obtenerProveedores,
    obtenerProveedorPorId,
    actualizarProveedor
} from '../controllers/proveedor.controller.js'

const router = Router();

router.post('/', crearProveedor);
router.get('/', obtenerProveedores);
router.get('/:id', obtenerProveedorPorId);
router.put('/:id', actualizarProveedor);


export default router;