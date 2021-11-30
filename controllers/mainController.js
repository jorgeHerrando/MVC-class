// Requerimos los modelos
// const db = require("../database/models");
const path = require("path");

// MainController
const mainController = {
  home: (req, res) => {
    return res.sendFile(path.resolve(__dirname + "/../views/home.html"));
  },
};

// Exportamos el controller
module.exports = mainController;
