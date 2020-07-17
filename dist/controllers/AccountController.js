"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.login = void 0;

var _typeorm = require("typeorm");

var bcrypt = _interopRequireWildcard(require("bcrypt"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

var _User = require("../entity/User");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//LOGIN
const login = async (req, res) => {
  const {
    email,
    senha
  } = req.body;
  const secret = "84edbc64b2e424f48fd21c08e26d9dd9";
  console.log(email);
  const user = await (0, _typeorm.getRepository)(_User.User).find({
    where: {
      email
    }
  });
  console.log(user);

  if (user.length === 1) {
    if (await bcrypt.compare(senha, user[0].senha)) {
      const token = jwt.sign({
        id: user[0].id
      }, secret, {
        expiresIn: '1d'
      });
      const data1 = await (0, _typeorm.getRepository)(_User.User).find({
        relations: ["post", "comentario", "favorito"],
        where: {
          email
        }
      });
      console.log(data1);
      return res.json(data1);
    } else {
      return res.status(404).json({
        message: 'user nao existe'
      });
    }
  } else {
    return res.status(404).json({
      message: 'erro ao logar'
    });
  }
}; //REGISTER


exports.login = login;

const register = async (req, res) => {
  const {
    nome,
    email,
    senha
  } = req.body;
  const senha_hash = await bcrypt.hash(senha, 8);
  const user = await (0, _typeorm.getRepository)(_User.User).save({
    nome,
    email,
    senha: senha_hash
  });
  console.log(user);
  return res.json(user);
};

exports.register = register;