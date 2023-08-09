import { DataSource, DataSourceOptions } from "typeorm";
import Config from "./config/Config";

const config: DataSourceOptions = {
  host: Config.host,
  port: parseInt(Config.db_port as string),
  username: Config.username,
  password: Config.password,
  database: Config.database,
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: [
    "src/entity/**/*.ts"
  ],
  migrations: [
    "src/database/migration/**/*.ts"
  ],
  subscribers: [
    "src/subscriber/**/*.ts", "dist/subscriber/**/*.js"
  ],
}

const dataSource = new DataSource(config);
export default dataSource;