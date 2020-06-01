import { Document } from 'arangojs/lib/cjs/util/types';

import Feed from 'repository/collections/feed';

/* Exports */
export default { create };

/* Module Functions */
async function create(body: Repo.Feed): Promise<Document<Repo.Feed>> {
  const feedMeta: Arango.InsertResults = await Feed.collection.save(body);

  return { ...feedMeta, ...body };
}
