import { createServer } from "http";
import app from "./app";
import AppDataSource from './DataSource';

const PORT = process.env.PORT || 3000;

const httpServer = createServer(app);

const startServer = async () => {
  try{
    await AppDataSource.initialize().then(() => {
      console.log('Database connected');
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      console.log('Database initialization complete');
    });
    httpServer.listen(PORT, () => {
      console.log(`Server running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
    if(error instanceof Error)
    console.log(error.message);
  }
};

startServer();