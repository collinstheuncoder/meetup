import cors from 'cors';
import express from 'express';

import config from './config';

const { frontend_dev_url, frontend_prod_url } = config;

// App init
const app = express();

const url = process.env.NODE_ENV === 'production'
  ? frontend_prod_url
  : frontend_dev_url;

const corsOptions = {
  origin: (origin, callback) =>
    (url.indexOf(origin) !== -1)
      ? callback(null, true)
      : callback(new Error('Access Denied!'))
};

// Middlewares
app.use(cors());

export default app;
