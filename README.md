Requisitos:
    Node.js instalado en tu sistema
    MongoDB Atlas (o una instancia local de MongoDB)

Instalación:
    Clona el repositorio:
        git clone https://github.com/jose-oliva/NodeJS_Challenge.git

Navega al directorio del proyecto:
    cd NodeJs_Challenge

Instala las dependencias:
    npm install

Configura las variables de entorno:
    1. Crea un archivo .env en la raíz del proyecto.
    2. Agrega la URL de conexión a MongoDB Atlas:
        MONGODB_URI = ....

Inicia la aplicación:
    node app.js

La aplicación estará disponible en http://localhost:3000.

Casos de Prueba:
    1. Obtener la lista de productos en stock:
        Accede a http://localhost:3000/products en tu navegador.
            Deberías ver una lista de productos en formato JSON, con el precio formateado.

    2. Obtener el precio de un producto sin descuento:
        Accede a http://localhost:3000/price/1/fly en tu navegador.
            Deberías ver el precio del producto "fly" sin descuento.

    3. Obtener el precio de un producto con descuento:
        Accede a http://localhost:3000/price/0/fly en tu navegador.
            Deberías ver el precio del producto "fly" con el descuento del 50% aplicado, ya que el usuario con id 0 tiene un descuento del 50% para los productos de la marca "nike".

    4. Manejar productos no encontrados:
        Accede a http://localhost:3000/price/1/producto-no-existente en tu navegador.
            Deberías ver un mensaje indicando que el producto no se encontró.

    5. Manejar usuarios no encontrados:
        Accede a http://localhost:3000/price/usuario-no-existente/cat en tu navegador.
            Deberías ver un mensaje indicando que el usuario no se encontró.

    6. Manejar productos fuera de stock:
        Modifica la cantidad de un producto en la base de datos a cero o un valor negativo.
        Accede a la ruta correspondiente a ese producto en tu navegador.
        Deberías ver un mensaje indicando que el producto está fuera de stock.