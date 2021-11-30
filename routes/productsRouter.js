const express = require("express");
const path = require("path");

// Requerimos router para hacer sistema de ruteo en Express
const router = express.Router();
// Requerimos el controlador que vamos a nombrar abajo
const productsController = require("../controllers/productsController");

// Acciones a desencadenar según ruta

// Todos los productos
// router.get("/", productsController.all);

// Detalle de producto
// router.get("/:id", productsController.detail);



module.exports = router;
