import { Router } from 'express';
import cors from 'cors';
import { getHome, getusers } from './controllers/HomeController';

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
    "https://quizzical-villani-cc5e6f.netlify.app/home",
    "https://quizzical-villani-cc5e6f.netlify.app/"
  ],
  preflightContinue: false
};

//use cors middlewares
routes.use(cors(options));

routes.get('/', getHome); //feito
routes.get('/users', getusers); //feito

//middleware autenticacao
//routes.use(auth);


export default routes;