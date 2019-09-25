import dotenv from 'dotenv';

dotenv.config();

export default {
  database: {
    dbName: process.env.DB_NAME
  }
}
