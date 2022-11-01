"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("./../db");

const table = "products";

module.exports = {
  getAllMovie: (req, res) => {
    let sql = "SELECT * FROM movie";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getMovieResult: (req, res) => {
    let sql = "SELECT * FROM movie where title like '%' ? '%'";
    db.query(sql, [req.params.title], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getMovieType: (req, res) => {
    let sql =
      "SELECT * FROM movie left join movie_type on movie.id = movie_type.idMovie where idType=?";
    db.query(sql, [req.params.id], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getRandomMovie: (req, res) => {
    let sql = "SELECT * FROM movie order by rand() limit 1;";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getUser: (req, res) => {
    let sql = "SELECT * FROM user";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getUserLoggin: (req, res) => {
    let sql = "SELECT * FROM user WHERE id = ?";
    db.query(sql, [req.params.id], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getUserPhoneLoggin: (req, res) => {
    let sql = "SELECT * FROM user WHERE PhoneNumber = ?";
    db.query(sql, [req.params.phone], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getEpisode: (req, res) => {
    let sql = "SELECT * FROM episode WHERE idMovie = ? and tap = ?";
    db.query(sql, [req.params.id, req.params.tap], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getAllEpisode: (req, res) => {
    let sql = "SELECT * FROM episode where idMovie = ?";
    db.query(sql, [req.params.id], (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  getType: (req, res) => {
    let sql = "SELECT * FROM type";
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  },
  detail: (req, res) => {
    let sql = "SELECT * FROM movie WHERE id = ?";
    db.query(sql, [req.params.id], (err, response) => {
      if (err) throw err;
      res.json(response[0]);
    });
  },
  update: (req, res) => {
    let data = req.body;
    let productId = req.params.productId;
    let sql = "UPDATE products SET ? WHERE id = ?";
    db.query(sql, [data, productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Update success!" });
    });
  },
  store: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO movie SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  storeUser: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO user SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) throw err;
      res.json({ message: "Insert success!" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
};
