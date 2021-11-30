// ************ Require's ************
const express = require("express");
const path = require("path");

// ************ express() ************
const app = express();

app.use(express.static("public")); // Necesario para los archivos estáticos en el folder /public

// ************ Template Engine ************

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // express accede directamente a views a la hora de renderizar si está en la raíz del proyecto.


/////////// MVC-Class ///////////

// ************ Route System require and use() ************

const productsRouter = require("./routes/productsRouter");
const productsController = require("./controllers/productsController");

// SISTEMA DE RUTEO

// nos lleva al router mainRouter
app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname + "/views/home.html"));
},);

// PRODUCTS
// Todos los productos
app.get("/products", (req, res) => {
  return res.sendFile(path.resolve(__dirname + "/views/products.html"));
});
// Detalle de producto
app.get("/products/:id", (req, res) => {
  const id = req.params.id;
  return res.send("Producto con id número " + id);
});

// MODULARIZADO => nos lleva al router de productos
// app.use("/products", productsRouter);

let mensaje = () => {
  console.log("Servidor funcionando en puerto 3000");
};

app.listen(3000, mensaje());
