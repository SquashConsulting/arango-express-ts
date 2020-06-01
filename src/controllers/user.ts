import * as Express from 'express';

import User from 'models/user';

/* Exports */
export default { Create };

/* Module Function */
async function Create(
  req: Express.Request,
  res: Express.Response,
  next: Express.NextFunction,
): Promise<void> {
  try {
    // The request is already validated here.
    const body = req.body.user;
    // Call some action on imported Repo Models
    const data: Arango.InsertResults = await User.create(body);
    // Call some other actions
    // SomeFoxxService.queueEmail(data._id);

    res.status(200).send({ data });
  } catch (error) {
    next(error);
  }
}
