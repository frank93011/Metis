import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  port: 3306,
  // host: 'metis_mysql',
  // username: 'root',
  // password: 'demo5566',
  // database: 'metis_db',
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [
    __dirname + "/../model/{*.ts,*.js}"
  ],
  synchronize: true,
  logging: false
}

export default config;