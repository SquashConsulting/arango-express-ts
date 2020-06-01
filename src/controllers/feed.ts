import { Request, Response } from 'express';

import Feed from 'models/feed';
import { Document } from 'arangojs/lib/cjs/util/types';

/* Exports */
export default { Create };

/* Module Functions */
async function Create(req: Request, res: Response): Promise<void> {
  const body: Repo.Feed = req.body.feed;
  const data: Document<Repo.Feed> = await Feed.create(body);

  res.status(200).send({ data });
}
