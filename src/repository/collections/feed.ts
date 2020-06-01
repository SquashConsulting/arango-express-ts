import joi from 'joi';

/* Constants */
const name = 'feeds';
const schema = joi
  .object({
    link: joi.string().required(),
    title: joi.string().required(),
  })
  .required();

/* Exports */
const defaultExport: Repo.CollectionExport = { name, schema };
export default defaultExport;
