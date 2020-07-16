import "reflect-metadata";
import {createConnection} from "typeorm";
const express = require('express')
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express();
createConnection();

app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.PORT || 3333);