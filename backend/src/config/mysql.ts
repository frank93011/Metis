import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  port: Number(process.env.MYSQL_PORT),
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