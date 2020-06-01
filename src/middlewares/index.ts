import bodyParser from 'body-parser';
import * as Express from 'express';

/* Exports */
export { initMiddlewares, handleRouterErrors };

/* Module Functions */
function initMiddlewares(server: Express.Express): Express.Express {
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));

  return server;
}

function handleRouterErrors(server: Express.Express): Express.Express {
  server.use(
    (
      err: any,
      _req: Express.Request,
      res: Express.Response,
      _next: Express.NextFunction,
    ) => {
      if (err.isBoom) {
        return res.status(err.output.statusCode).json(err);
      }
    },
  );

  return server;
}
