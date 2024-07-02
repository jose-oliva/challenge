// importamos servicio de productos
const ProductsService = require('../services/productsService');

// controlador para la ruta '/products'
exports.getInStockProducts = async (req, res) => {
    try {
        // Llamado a getInStockProducts del servicio de productos para obtener los productos en stock
        const products = await ProductsService.getInStockProducts();
        // respuesta en formato JSON
        res.json(products);
    } catch (error) {
        // imprimimos cualquier error
        console.error('Error fetching in-stock products:', error);
        // respuesta con có\odigo de estado 500
        res.status(500).json({ error: 'Internal server error' });
    }
}