"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express = require("express");
const bodyParser = require("body-parser");
const router_1 = require("./routes/router");
const typeorm_1 = require("typeorm");
const mysql_1 = require("./config/mysql");
const userModel_1 = require("./model/userModel");
const productModel_1 = require("./model/productModel");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routerSetup();
        this.mysqlSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    routerSetup() {
        for (const route of router_1.default) {
            this.app.use(route.getPrefix(), route.getRouter());
        }
    }
    mysqlSetup() {
        typeorm_1.createConnection(mysql_1.default).then(connection => {
            console.log("Has connected to DB? ", connection.isConnected);
            let userRepository = connection.getRepository(userModel_1.User);
            let productRepository = connection.getRepository(productModel_1.Product);
        }).catch(error => console.log("TypeORM connection error: ", error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map