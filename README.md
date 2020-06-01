# RSS Reader Backend

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

## Running The Service

1. Copy `.env.example` into `.env` and use the examples to set up your environment.

2. run `npm run setup:repo` to set up all the necessary document and edge collections with required indexes.

3. run `npm run live` to start the nodemon server.
