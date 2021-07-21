import 'reflect-metadata';
import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes/router";
import { createConnection } from 'typeorm';
import config from './config/mysql';
import { User } from './model/userModel';
import { Product } from './model/productModel';

 const App = async () => {
  let app: express.Application;
  app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  await createConnection(config).then(connection => {
    console.log("Has connected to DB? ", connection.isConnected);
    let userRepository = connection.getRepository(User);
    let productRepository = connection.getRepository(Product)
  }).catch(error => console.log("TypeORM connection error: ", error));

  for (const route of router) {
    app.use(route.getPrefix(), route.getRouter());
  }

  return app
}

export default App;