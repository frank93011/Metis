"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "mysql",
    host: process.env.MYSQL_HOST,
    port: 3306,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [
        __dirname + "/../model/*.ts"
    ],
    synchronize: true,
    logging: false
};
exports.default = config;
//# sourceMappingURL=mysql.js.map