import joi from 'joi';
import { Router } from 'express';
import validateRequest from 'express-joi-validator';

import User from 'repository/collections/user';
import UserController from 'controllers/user';

const userRouter: Router = Router();

userRouter.post(
  '/',
  validateRequest({
    body: {
      user: User.schema,
    },
  }),
  UserController.Create,
);

/* Other router definitions may follow */

export default userRouter;
