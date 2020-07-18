"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.post = void 0;

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

//retorna os produtos da home page, produtos marcados como mais vendidos
const post = async (req, res) => {
  const {
    id
  } = req.params;
  const post = await (0, _typeorm.getRepository)(_Post.Post).findOne({
    relations: ["user", "comentarios"],
    select: ["id", "titulo", "descricao", "caminho"],
    where: {
      id
    }
  });
  return res.json(post);
};

exports.post = post;