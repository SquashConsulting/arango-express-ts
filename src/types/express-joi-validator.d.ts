declare module 'express-joi-validator' {
  import { NextFunction, Response, Request } from 'express';
  import { SchemaLike, ValidationOptions, ValidationResult } from 'joi';

  interface Schema {
    [key: string]: SchemaLike;
  }

  type JoiValidator = (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => ValidationResult<Schema>;

  function Validator(schema: Schema, options?: ValidationOptions): JoiValidator;

  export default Validator;
}
