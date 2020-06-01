import { Router } from 'express';
import validateRequest from 'express-joi-validator';

import Category from 'repository/collections/category';
import CategoryController from 'controllers/category';

const categoryRouter: Router = Router();

categoryRouter.post(
  '/',
  validateRequest({
    body: {
      category: Category.schema,
    },
  }),
  CategoryController.Create,
);

export default categoryRouter;
