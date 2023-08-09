
// Import the express in typescript file
import express from 'express';
import routes from './routes';
 
// Initialize the express engine
const app: express.Application = express();

app.use(express.json());
 
// Handling '/' Request
app.get('/', (_req, _res) => {
    _res.sendFile('home.html', { root: __dirname });
});

app.use('/api/v1', routes);

export default app;