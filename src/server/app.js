import express from 'express';
import bodyParser from 'body-parser';
import dbConnection from '../database/model'

export default () => {
  const app = express();
  app.use(bodyParser.json());
  app.get('*', (req, res) => {
    return res.status(400).json({
      success: 'false',
      message: 'Route does not exist'
    })
  });
  dbConnection();
  return app;
}
