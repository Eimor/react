# react lumina ejercicio entrevista

Tener instalado Node js.
https://nodejs.org/en/

1- Instalar servidor para ejecutar mock que contiene clientes y productos.

npm install -g json-server

2- Dentro de la carpeta '../mock-products' donde se encuentra el archivo 'products.json' ejecutar el siguiente comando:

json-server --watch products.json --port 3004
  -Esto levantara el mock de la api que contiene clientes y productos cargados
   http://localhost:3004/

3- Para iniciar la pagina web ir a la carpeta "../venta-productos" y ejecutar el siguiente comando:

npm install
npm start
