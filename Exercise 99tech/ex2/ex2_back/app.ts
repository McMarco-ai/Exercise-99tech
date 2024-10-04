import express, {Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from "dotenv";


dotenv.config();

const hostname: string = process.env.HOST || 'localhost';

const app: Express = express();

app.use(bodyParser.json());

app.use(cors({
  origin: '*',
}));

app.get('/', (request: Request, response: Response) => {
  response.send('Node Server running - startpage...');
  response.end();
});

const PORT: number = parseInt(process.env.PORT || '80');

app.listen(PORT, (err?: Error) => {
  if (err) throw err;
  console.log(`Node server running now - using http://${hostname}:${PORT}`);
});


import MoviesRoutes from './routes/MoviesRoutes';


app.use("/movies/", MoviesRoutes);

export default app;
