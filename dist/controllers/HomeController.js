"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users = exports.home = void 0;

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

var _User = require("../entity/User");

//retorna os produtos da home page, produtos marcados como mais vendidos
const home = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_Post.Post).find({
    relations: ["user", "comentario"],
    select: ["id", "titulo", "descricao", "caminho", "user", "comentarios"]
  });
  console.log(posts);
  return res.json(posts);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.home = home;

const users = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_User.User).find();
  return res.json(posts);
};

exports.users = users;