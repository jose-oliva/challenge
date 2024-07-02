// importamos modulo express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// importamos la funcion para conectarnos a la base de datos
const { connectToDatabase } = require('./utils/db');

// configuramos middleware para procesar JSON en las solicitudes
app.use(express.json());

// importamos enrutadores para productos y precios
const productsRouter = require('./routes/productsRouter');
const priceRouter = require('./routes/priceRouter');

// enrutadores con las rutas
app.use('/products', productsRouter);
app.use('/price', priceRouter);

// funcion para iniciar servidor
async function startServer() {
    try {
        // conectamos a la base de datos
        await connectToDatabase();
        // mantenemos en escucha en el puerto especificado
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        // imprime cualquier error que ocurra
        console.error('Error starting server:', error);
    }
}

// llamado a la función para iniciar servidor
startServer()