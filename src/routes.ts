import { Router } from 'express';
import cors from 'cors';
import { getHome } from './controllers/HomeController';

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
      "*"
  ],
  preflightContinue: false
};

//use cors middleware
routes.use(cors(options));

routes.get('/', getHome); //feito

//middleware autenticacao
//routes.use(auth);


export default routes;