"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = void 0;

//retorna os produtos da home page, produtos marcados como mais vendidos
const getHome = async (req, res) => {
  //const destaques = await getRepository().find();
  return res.json({
    destaques: 'oie mundo'
  });
};

exports.getHome = getHome;