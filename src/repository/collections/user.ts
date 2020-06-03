import joi from 'joi';

import DB from 'repository/database';
import { DocumentCollection } from 'arangojs';

/* Constants */

const name = 'users';
const collection: DocumentCollection<Repo.User> = DB.collection(name);
const index: Repo.IndexDefinition = { type: 'hash', fields: ['username'] };
const schema: joi.ObjectSchema = joi
  .object({
    username: joi.string().optional(),
    password: joi.string().required(),
    email: joi.string().email().required(),
  })
  .required();

/* Exports */
const defaultExport = { name, index, schema, collection };
export default defaultExport;
