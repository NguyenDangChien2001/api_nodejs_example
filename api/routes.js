"use strict";
module.exports = function (app) {
  var productsCtrl = require("./controllers/ProductsController");

  // todoList Routes
  app.route("/movie").get(productsCtrl.getAllMovie).post(productsCtrl.store);

  app.route("/movie/:id").get(productsCtrl.getMovieType);

  app.route("/movie/result/:title").get(productsCtrl.getMovieResult);

  // app
  //   .route("/movie/:id")
  //   .get(productsCtrl.detail)
  //   .put(productsCtrl.update)
  //   .delete(productsCtrl.delete);

  app.route("/random").get(productsCtrl.getRandomMovie);

  app.route("/user").get(productsCtrl.getUser).post(productsCtrl.storeUser);

  app.route("/type").get(productsCtrl.getType);

  app.route("/user/:id").get(productsCtrl.getUserLoggin);

  app.route("/phone/:phone").get(productsCtrl.getUserPhoneLoggin);

  app.route("/phone").get(productsCtrl.getUser);

  app.route("/episode/:id/:tap").get(productsCtrl.getEpisode);

  app.route("/episode/:id").get(productsCtrl.getAllEpisode);
};
