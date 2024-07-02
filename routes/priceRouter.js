// importamos el modulo express
const express = require('express');
const router = express.Router();

// importamos controlador de precios
const PriceController = require('../controllers/priceController');

// ruta GET para '/price/{user_id}/{nombre_producto}'
router.get('/:userId/:productName', async (req, res) => {
    try {
        // obtenemos parametros userId y productName del url
        const { userId, productName } = req.params;
        // metodo getProductPrice del controlador de precios con los parametros userId y productName
        const price = await PriceController.getProductPrice(userId, productName);
        // respuesta en formato JSON
        res.json({ price });
    } catch (error) {
        // respuesta con codigo de estado 500
        res.status(500).json({ error: 'Internal server error' });
    }
});

// exportamos para ser utilizado en otros modulos
module.exports = router;