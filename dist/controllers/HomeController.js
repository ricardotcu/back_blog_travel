"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.favoritos = exports.comentarios = exports.users = exports.home = void 0;

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

var _User = require("../entity/User");

var _Comentario = require("../entity/Comentario");

//retorna os produtos da home page, produtos marcados como mais vendidos
const home = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_Post.Post).find({
    relations: ["user", "comentarios"],
    select: ["id", "titulo", "descricao", "caminho"]
  });
  return res.json(posts);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.home = home;

const users = async (req, res) => {
  const users = await (0, _typeorm.getRepository)(_User.User).find({
    select: ["id", "nome", "email", "caminho"],
    relations: ["posts", "comentarios", "favoritos"]
  });
  return res.json(users);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.users = users;

const comentarios = async (req, res) => {
  const users = await (0, _typeorm.getRepository)(_Comentario.Comentario).find({
    select: ["id", "descricao"],
    relations: ["post", "user"]
  });
  return res.json(users);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.comentarios = comentarios;

const favoritos = async (req, res) => {};

exports.favoritos = favoritos;