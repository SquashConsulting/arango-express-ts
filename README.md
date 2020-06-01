# ArangoDB - TypeScript - Express Boilerplate

## Project structure

```
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── types
│   ├── utils
│   ├── configs
│   ├── middlewares
│   ├── routes
│   ├── models
│   ├── controllers
│   ├── repository
│   └── entry.ts
└── tsconfig.json
```

## Features

- Repository
  - [x] ArangoDB support
  - [x] DB setup scripts
  - [x] Generic Model API
  - [ ] Foxx Services Support
  - [ ] Migrations
- API
  - [x] Request Validation
  - [ ] Custom Error Handling
  - [ ] Authentication Middleware
- Misc
  - [ ] Logging

## Running The Service

1. Copy `.env.example` into `.env` and use the examples to set up your environment.

1. run `npm run setup:repo` to set up all the necessary document and edge collections with required indexes.

1. run `npm run live` to start the nodemon server.

## Adding A New Collection

In order to add a new collection you need to create two
files in either `repository/collections` or `repository/edges` depending on the collection type.

For example to create a `User` document collection you need to do:

```sh
$ touch src/repository/collections/user.ts
$ touch src/repository/collections/user.d.ts
```

The `.ts` file has a standard export type. A typical file looks like this:

```ts
// src/repository/collections/user.ts

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
```

Here we export a name which is used by `npm run setup:repo` script to
initiate the collection. The `schema` property on the default export is used for API request validation. Notice that this schema has `password` field but the document itself will instead hold `passwordHash` field:

```ts
// src/repository/collections/user.d.ts

declare namespace Repo {
  interface User {
    username: string;
    email: string;
    passwordHash: string;
  }
}
```

In order to merge this declaration with the global `Repo` namespace we need to add a triple-slash reference in `src/types/references.d.ts` file:

```ts
/* Collections */
...
///<reference path="../repository/collections/user.d.ts"/>
...

```

Now that we have these we need to update the `index` file for the setup scripts to be able to initiate our collection.

```ts
// src/repository/collections/index.ts

/* Other imports */
import User from './user';

// append your collection to the existing list
const Collections: Repo.CollectionDefinition[] = [
  /*other collections*/
  User,
].map(
  (collection: Repo.CollectionExport): Repo.CollectionDefinition => ({
    ...collection,
    type: 'document',
  }),
);

export default Collections;
```

Now your collection is ready and you can run `npm run setup:repo` to update the database.

## Adding CRUD operations.

To add CRUD operations for our user model we need to do the following:

1. Create a new route file (i.e `src/routes/user.ts`).
1. Add route definition to the index router: `src/routes/index.ts`.
1. Create a new controller file (i.e `src/controllers/user.ts`).
1. Create a new model file (i.e `src/models/user.ts`).

### Creating a new route.

A typical router should like like this:

```ts
// src/routes/user.ts

import joi from 'joi';
import { Router } from 'express';
import validateRequest from 'express-joi-validator';

import User from 'repository/collections/user';
import UserController from 'controllers/user';

const userRouter: Router = Router();

userRouter.post(
  '/',
  validateRequest({
    body: {
      user: User.schema,
    },
  }),
  UserController.Create,
);

/* Other router definitions may follow */

export default userRouter;
```

then you need to include this in the index router:

```ts
// src/routes/index.ts

/* ... other router imports ... */
import UserRouter from './user';

/* Module Functions */
function setupRoutes(server: Express): Express {
  /* ... other router definitions ... */
  server.use('/users', UserRouter);

  return server;
}
```

### Creating A New Controller

Controller modules should expose basic functionality to handler requests.
A typical action handler function looks like this:

```ts
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
    SomeFoxxService.queueEmail(data._id);

    res.status(200).send({ data });
  } catch (error) {
    next(error);
  }
}
```

### Creating A New Model

Unlike the previous parts, creating the model is pretty simple.
There is a `modelBuilder` generic function which provides basic CRUD API for models.

```ts
// src/models/user.ts

import modelBuilder from './modelBuilder';
import User from 'repository/collections/user';

/* Exports */
export default modelBuilder<Repo.User>(User.collection);
```

This makes a new `Model` object with crud actions.

After all of this, you should be able to send requests and run operations that you defined.

Run `npm run live` to start the server.
