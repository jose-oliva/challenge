// importamos modulo MongoClient de MongoDB
const { MongoClient } = require('mongodb');
require('dotenv').config();

// url a la base de datos MongoDB
const url = process.env.MONGODB_URI;

// almacenamos cliente de MongoDB
let client;

// funcion  para conectarse a la base de datos
async function connectToDatabase() {
    try {
        // conectamos al server usando la url
        client = await MongoClient.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        // imprime cualquier error
        console.error('Error connecting to MongoDB', error);
        throw error;
    }
}

// objeto con funciones para conectarse a la base de datos y obtener la instancia de la base de datos
module.exports = {
    connectToDatabase,
    getDb: () => client.db('nodeChallengeSO'),
}