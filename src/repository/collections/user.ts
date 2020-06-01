import joi from 'joi';

import DB from 'repository/database';
import { DocumentCollection } from 'arangojs';

/* Constants */

const name = 'users';
const collection: DocumentCollection<Repo.User> = DB.collection(name);
const schema: joi.ObjectSchema = joi
  .object({
    username: joi.string().optional(),
    password: joi.string().required(),
    email: joi.string().email().required(),
  })
  .required();

/* Exports */
const defaultExport = { name, schema, collection };
export default defaultExport;
