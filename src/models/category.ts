import { Document } from 'arangojs/lib/cjs/util/types';

import Category from 'repository/collections/category';

/* Exports */
export default { create };

/* Module Functions */
async function create(body: Repo.Category): Promise<Document<Repo.Category>> {
  const categoryMeta: Arango.InsertResults = await Category.collection.save(
    body,
  );

  return { ...categoryMeta, ...body };
}
