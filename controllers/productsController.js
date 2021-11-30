// Requerimos los modelos
const db = require("../database/models");
const path = require("path");

// ProductsController
const productsController = {
  // Todos los productos

  // all: ,


  // Detalle de producto

  // detail: 



  // CON USO DE MODELOS
  // detail: async (req, res) => {
  //   const id = req.params.id;
  //   // llamar al producto con ese id
  //   let product = await db.Product.findOne({
  //     where: { id: id },
  //   });
  //   // manda una vista
  //   return res.render("product", {
  //     // con info recibida de la DB
  //     product: product,
  //   });
  // },


};

// Exportamos el controller
module.exports = productsController;
