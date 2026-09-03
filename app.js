import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import proveedoresRouter from './routes/proveedores.routes.js';
import productoRoutes from './routes/producto.routes.js';
import { conectarDB } from './config/db.js';


const app = express();

//Middlewares globales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Middlewares de rutas
app.use('/api/productos', productoRoutes);
app.use('/api/proveedores', proveedoresRouter);
const PORT = process.env.PORT || 3000;

conectarDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Express listo en http://localhost:${PORT}`);
    });
});
