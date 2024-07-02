// importamos getDb del archivo ../utils/db
const { getDb } = require('../utils/db');

// servicio para obtener los productos en stock
exports.getInStockProducts = async () => {
    try {
        // instancia de la base de datos
        const db = getDb();
        // consulta a la colección 'products' para obtener los productos con cantidad mayor a 0
        const products = await db.collection('products').find({ quantity: { $gt: 0 } }).toArray();
        // formato mas entendible
        return products.map(({ name, brand, price }) => ({
            name,
            brand,
            price: `$${price.toLocaleString()}`
        }));
    } catch (error) {
        // imprimimos cualquier error
        console.error('Error fetching in-stock products:', error);
        // error manejado por el controlador
        throw error;
    }
}