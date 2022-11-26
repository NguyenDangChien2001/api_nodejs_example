"use strict";

const util = require("util");
const mysql = require("mysql");
const db = require("./../db");
const { response } = require("express");

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
  getListMovie: (req, res) => {
    let sql =
      "SELECT * FROM movie inner join favouritelist on movie.id = favouritelist.idMovie WHERE idUser = ?";
    db.query(sql, [req.params.id], (err, response) => {
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
  storeList: (req, res) => {
    let data = req.body;
    let sql = "INSERT INTO favouritelist SET ?";
    db.query(sql, [data], (err, response) => {
      if (err) {
        res.json({ message: "Phim đã tồn tại trong danh sách" });
        return;
      }
      res.json({ message: "Thêm thành công" });
    });
  },
  delete: (req, res) => {
    let sql = "DELETE FROM products WHERE id = ?";
    db.query(sql, [req.params.productId], (err, response) => {
      if (err) throw err;
      res.json({ message: "Delete success!" });
    });
  },
  handleLogin: (req, res) => {
    let sql = "SELECT * FROM user WHERE Email = ? and Password = ?";
    db.query(sql, [req.body.Email, req.body.Password], (err, response) => {
      const test = response.length;

      if (err) {
        res.json({
          message: "Có lỗi xảy ra trong quá trình đăng nhập, vui lòng thử lại",
        });
      }
      if (test == 0) {
        res.json({
          message: "Email hoặc mật khẩu không đúng",
        });
      }
      if (test > 0) {
        res.json({
          message: "Đăng nhập thành công",
          status: "success",
        });
      }
    });
  },
};
