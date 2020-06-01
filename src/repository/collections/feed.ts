import joi from 'joi';

import DB from 'repository/database';
import { DocumentCollection } from 'arangojs';

/* Constants */
const name = 'feeds';
const collection: DocumentCollection<Repo.Feed> = DB.collection(name);
const schema = joi
  .object({
    link: joi.string().required(),
    title: joi.string().required(),
  })
  .required();

/* Exports */
const defaultExport: Repo.CollectionExport = { name, schema, collection };
export default defaultExport;
