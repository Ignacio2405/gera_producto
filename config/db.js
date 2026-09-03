import mongoose from "mongoose";

export const conectarDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`[🟢]MongoDB Conectado: ${conn.connection.name}`);
    }catch (error) {
        console.error(`[🔴]Error al conectar a MongoDB: ${error.message}`);
        process.exit(1);
    }
}