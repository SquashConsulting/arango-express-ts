import { Request, Response } from 'express';

import Category from 'models/category';
import { Document } from 'arangojs/lib/cjs/util/types';

/* Exports */
export default { Create };

/* Module Functions */
async function Create(req: Request, res: Response): Promise<void> {
  const body: Repo.Category = req.body.category;
  const data: Document<Repo.Category> = await Category.create(body);

  res.status(200).send({ data });
}
