"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _HomeController = require("./controllers/HomeController");

var _PostsController = require("./controllers/PostsController");

var _AccountController = require("./controllers/AccountController");

var _auth = require("./middlewares/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)(); //opçoes para cors midddleware

const options = {
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token", "Authorization"],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: ["*", "https://quizzical-villani-cc5e6f.netlify.app", "https://quizzical-villani-cc5e6f.netlify.app/", "https://quizzical-villani-cc5e6f.netlify.app/home", "https://quizzical-villani-cc5e6f.netlify.app/login", "https://quizzical-villani-cc5e6f.netlify.app/register"],
  preflightContinue: false
}; //use cors middlewares

routes.use((0, _cors.default)(options));
routes.get('/', _HomeController.home); //feito

routes.get('/home', _HomeController.home); //feito

routes.get('/post/:id', _PostsController.post); //feito

routes.get('/users', _HomeController.users); //feito

routes.get('/comentarios', _HomeController.comentarios); //feito

routes.post('/login', _AccountController.login); //feito

routes.post('/register', _AccountController.register); //feito

routes.post('/save_comentario', _HomeController.save_comentario); //feito
//middleware autenticacao

routes.use(_auth.auth);
var _default = routes;
exports.default = _default;