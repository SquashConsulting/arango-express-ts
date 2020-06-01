import { Express } from 'express';

import FeedRouter from './feed';
import CategoryRouter from './category';

/* Exports */
export default setupRoutes;

/* Module Functions */
function setupRoutes(server: Express): Express {
  server.use('/feeds', FeedRouter);
  server.use('/categories', CategoryRouter);

  return server;
}
