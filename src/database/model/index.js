import mongoose from 'mongoose';
import envVar from '../../../environment';

const {database: {dbName}} = envVar;

export default () => (
  mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('database connection success...'))
  .catch((error) => console.log(error))
);



