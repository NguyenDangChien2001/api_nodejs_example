"use strict";
module.exports = function (app) {
  var productsCtrl = require("./controllers/ProductsController");

  // todoList Routes
  app.route("/movie").get(productsCtrl.get).post(productsCtrl.store);

  app
    .route("/movie/:id")
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);

  app.route("/random").get(productsCtrl.getRandomMovie);

  app.route("/user").get(productsCtrl.getUser).post(productsCtrl.storeUser);
};
