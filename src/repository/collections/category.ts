import joi from 'joi';

import DB from 'repository/database';
import { DocumentCollection } from 'arangojs';

/* Constants */
const name = 'categories';
const collection: DocumentCollection<Repo.Category> = DB.collection(name);
const schema = joi
  .object({
    title: joi.string().required(),
  })
  .required();

/* Exports */
const defaultExport: Repo.CollectionExport = { name, schema, collection };
export default defaultExport;
