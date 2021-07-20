import 'reflect-metadata';
import * as express from "express";
import * as bodyParser from "body-parser";
import router from "./routes/router";
import { createConnection } from 'typeorm';
import config from './config/mysql';
import { User } from './model/userModel';
import { Product } from './model/productModel';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerSetup();
    this.mysqlSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routerSetup() {
    for (const route of router) {
      this.app.use(route.getPrefix(), route.getRouter());
    }
  }

  private mysqlSetup() {
    createConnection(config).then(connection => {
      console.log("Has connected to DB? ", connection.isConnected);
      let userRepository = connection.getRepository(User);
      let productRepository = connection.getRepository(Product)
    }).catch(error => console.log("TypeORM connection error: ", error));
  }
}

export default new App().app;