import { Express } from 'express';

import UserRouter from './user';

/* Exports */
export default setupRoutes;

/* Module Functions */
function setupRoutes(server: Express): Express {
  server.use('/users', UserRouter);

  return server;
}
