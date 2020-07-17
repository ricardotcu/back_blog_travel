"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _HomeController = require("./controllers/HomeController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); //opçoes para cors midddleware

const options = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["*", "https://quizzical-villani-cc5e6f.netlify.app", "https://quizzical-villani-cc5e6f.netlify.app/", "https://quizzical-villani-cc5e6f.netlify.app/home"],
  preflightContinue: false
}; //use cors middlewares

routes.use((0, _cors.default)(options));
routes.get('/', _HomeController.getHome); //feito

routes.get('/home', _HomeController.getHome); //feito

routes.get('/users', _HomeController.getusers); //feito
//middleware autenticacao
//routes.use(auth);

var _default = routes;
exports.default = _default;