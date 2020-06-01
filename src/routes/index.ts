import { Express } from 'express';

import FeedRouter from './feed';

/* Exports */
export default setupRoutes;

/* Module Functions */
function setupRoutes(server: Express): Express {
  server.use('/feed', FeedRouter);

  return server;
}
