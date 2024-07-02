// importamos el modulo express
const express = require('express');
const router = express.Router();

// importamos controlador de productos
const ProductsController = require('../controllers/productsController');

// ruta GET para '/products'
router.get('/', async (req, res) => {
    try {
        // Llamado a getInStockProducts del controlador de productos, con los objetos req y res
        await ProductsController.getInStockProducts(req, res);
    } catch (error) {
        // imprimimos cualquier error
        console.error('Error fetching in-stock products:', error);
        // respuesta con codigo de estado 500
        res.status(500).json({ error: 'Internal server error' });
    }
});

// exportamos para ser utilizado en otros modulos
module.exports = router