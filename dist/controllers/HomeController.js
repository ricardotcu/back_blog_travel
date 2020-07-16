"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = void 0;

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

//retorna os produtos da home page, produtos marcados como mais vendidos
const getHome = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_Post.Post).find();
  return res.json(posts);
};

exports.getHome = getHome;