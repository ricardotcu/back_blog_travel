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
  const posts = await (0, _typeorm.getRepository)(_Post.Post).findOne({
    where: {
      id
    }
  });
  return res.json(posts);
};

exports.post = post;