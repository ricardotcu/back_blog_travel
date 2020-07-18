"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save_comentario = exports.comentarios = exports.users = exports.home = void 0;

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

const save_comentario = async (req, res) => {
  const {
    comentario,
    userId,
    postId
  } = req.body;
  console.log(comentario);
  console.log(userId);
  console.log(postId);
  const save_comentario = await (0, _typeorm.getRepository)(_Comentario.Comentario).save({
    descricao: comentario,
    postId,
    userId
  });
  console.log(save_comentario);
  return res.json(save_comentario);
};

exports.save_comentario = save_comentario;