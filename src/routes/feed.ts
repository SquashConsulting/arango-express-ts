import Joi from 'joi';
import { Router } from 'express';
import validateRequest from 'express-joi-validator';

import Feed from 'repository/collections/feed';
import FeedController from 'controllers/feed';

const feedRouter: Router = Router();

feedRouter.post(
  '/',
  validateRequest({
    body: {
      feed: Feed.schema,
    },
  }),
  FeedController.Post,
);

export default feedRouter;
