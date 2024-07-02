// importamos el servicio de precios
const PriceService = require('../services/priceService');

// controlador para '/price/{user_id}/{nombre_producto}'
exports.getProductPrice = async (userId, productName) => {
    try {
        // mtodo getProductPrice del servicio de precios con los parametros userId y productName
        const price = await PriceService.getProductPrice(userId, productName);
        // devolvemos precio
        return price;
    } catch (error) {
        // error manejado por el controlador
        throw error;
    }
};