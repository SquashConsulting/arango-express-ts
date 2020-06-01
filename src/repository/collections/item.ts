import joi from 'joi';

/* Constants */
const name = 'items';
const schema = joi
  .object({
    title: joi.string().required(),
    description: joi.string().required(),
  })
  .required();

/* Exports */
const defaultExport: Repo.CollectionExport = { name, schema };
export default defaultExport;
