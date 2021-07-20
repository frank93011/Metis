"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: "mysql",
    port: 3306,
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [
        __dirname + "/../model/{*.ts,*.js}"
    ],
    synchronize: true,
    logging: false
};
exports.default = config;
//# sourceMappingURL=mysql.js.map