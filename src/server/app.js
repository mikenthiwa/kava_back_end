import express from 'express';
import bodyParser from 'body-parser';
import dbConnection from '../database/model';
import cors from 'cors'
import { routes } from '../routes';

export default () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(routes());
  app.get('*', (req, res) => {
    return res.status(400).json({
      success: 'false',
      message: 'Route does not exist'
    })
  });
  dbConnection();
  return app;
}
