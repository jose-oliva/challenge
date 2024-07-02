// importamos getDb desde el archivo ../utils/db
const { getDb } = require('../utils/db');

// servicio para obtener el precio de un producto
exports.getProductPrice = async (userId, productName) => {
    try {
        // instancia de la base de datos
        const db = getDb();

        // buscamos el producto 
        const product = await db.collection('products').findOne({ name: productName });

        // mensaje indicando que no se encontro
        if (!product) {
            return 'Product not found';
        }

        // si la cantidad es cero o menor, devolvemos que esta fuera de stock
        if (product.quantity <= 0) {
            return 'Product out of stock';
        }

        // buscamos el usuario
        const user = await db.collection('users').findOne({ id: parseInt(userId) });

        // mensaje indicando que no se encontro
        if (!user) {
            return 'User not found';
        }

        // verificamos si tiene un descuento
        const userDiscount = user?.specialPrices?.find(sp => sp.brand === product.brand)?.discount;

        // si tiene un descuento, calculamos precio con el descuento
        if (userDiscount) {
            const discountedPrice = product.price * (1 - userDiscount);
            return `$${discountedPrice.toLocaleString()}`;
        } else {
            // si no tiene un descuento, devolvemos precio normal
            return `$${product.price.toLocaleString()}`;
        }
    } catch (error) {
        // error manejado por el controlador
        throw error;
    }
};