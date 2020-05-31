import { DocumentCollection } from 'arangojs';
import { Document } from 'arangojs/lib/cjs/util/types';

import DB from 'repository/database';

/* Exports */
export default { create };

/* Collection Definitions */
const Feed: DocumentCollection<Repo.Feed> = DB.collection('feeds');

/* Module Functions */

async function create(body: Repo.Feed): Promise<Document<Repo.Feed>> {
  const feedMeta: Arango.InsertResults = await Feed.save(body);
  return { ...feedMeta, ...body };
}
