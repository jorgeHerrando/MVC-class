const express = require("express");
const path = require("path");

// Requerimos router para hacer sistema de ruteo en Express
const router = express.Router();
// Requerimos el controlador que vamos a nombrar abajo
const productsController = require("../controllers/productsController");

// Acciones a desencadenar según ruta
router.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname + "/../views/products.html"));
});


router.get("/:id", (req, res) => {
  const id = req.params.id;
  return res.send("Producto con id número " + id);
});

// MODULARIZADO
// router.get("/", productsController.all);

// router.get("/:id", productsController.detail);


module.exports = router;
