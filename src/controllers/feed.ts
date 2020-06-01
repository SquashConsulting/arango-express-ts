import { Request, Response, NextFunction } from 'express';

import Feed from 'models/feed';
import { Document } from 'arangojs/lib/cjs/util/types';

/* Exports */
export default { Post };

/* Module Functions */
async function Post(
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> {
  const body: Repo.Feed = req.body.feed;
  const data: Document<Repo.Feed> = await Feed.create(body);

  res.status(200).send({ data });
}
