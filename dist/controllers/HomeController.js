"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getusers = exports.getHome = void 0;

var _typeorm = require("typeorm");

var _Post = require("../entity/Post");

var _User = require("../entity/User");

//retorna os produtos da home page, produtos marcados como mais vendidos
const getHome = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_Post.Post).find({
    relations: ["user"]
  });
  return res.json(posts);
}; //retorna os produtos da home page, produtos marcados como mais vendidos


exports.getHome = getHome;

const getusers = async (req, res) => {
  const posts = await (0, _typeorm.getRepository)(_User.User).find();
  return res.json(posts);
};

exports.getusers = getusers;