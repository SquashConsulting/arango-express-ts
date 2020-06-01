import express, * as Express from 'express';

import pipe from 'utils/pipe';
import setupRoutes from 'routes';
import { initMiddlewares, handleRouterErrors } from 'middlewares';

const app: Express.Express = express();

const server = pipe<Express.Express>(
  app,
  initMiddlewares,
  setupRoutes,
  handleRouterErrors,
);

server.listen(4000, () => {
  console.log('Running on localhost:4000');
});
