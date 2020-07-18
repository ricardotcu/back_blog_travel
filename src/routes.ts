import { Router } from 'express';
import cors from 'cors';
import {
  home,
  users,
  comentarios,
  save_comentario
} from './controllers/HomeController';
import { post } from './controllers/PostsController';
import { login, register } from './controllers/AccountController';
import { auth } from './middlewares/auth';

const routes = Router();

//opçoes para cors midddleware
const options:cors.CorsOptions = {
  allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization"
  ],
  credentials: true,
  methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
  origin: [
    "*",
    "https://quizzical-villani-cc5e6f.netlify.app",
    "https://quizzical-villani-cc5e6f.netlify.app/",
    "https://quizzical-villani-cc5e6f.netlify.app/home",
    "https://quizzical-villani-cc5e6f.netlify.app/login",
    "https://quizzical-villani-cc5e6f.netlify.app/register"
  ],
  preflightContinue: false
};

//use cors middlewares
routes.use(cors(options));

routes.get('/', home); //feito
routes.get('/home', home); //feito
routes.get('/post/:id', post); //feito
routes.get('/users', users); //feito
routes.get('/comentarios', comentarios); //feito
routes.post('/login', login); //feito
routes.post('/register', register); //feito
routes.post('/save_comentario', save_comentario); //feito

//middleware autenticacao
routes.use(auth);


export default routes;