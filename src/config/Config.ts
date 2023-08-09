import dotenv from 'dotenv';

dotenv.config();
// dotenv.config({ path: __dirname + `../../.env` });

const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  db_port: process.env.DB_PORT,
}

export default config;