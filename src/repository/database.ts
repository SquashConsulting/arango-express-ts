import { Database } from 'arangojs';

import 'configs/loadENV';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const DB: Database = new Database({
  url: `http://${DB_HOST}:${DB_PORT}`,
});

DB.useDatabase(DB_NAME);
DB.useBasicAuth(DB_USER, DB_PASSWORD);

export default DB;
