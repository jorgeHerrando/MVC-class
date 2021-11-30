const express = require("express");
const path = require("path");

// Requerimos router para hacer sistema de ruteo en Express
const router = express.Router();
// Requerimos el controlador que vamos a nombrar abajo
const mainController = require("../controllers/mainController");

router.get("/", mainController.home);

module.exports = router;
