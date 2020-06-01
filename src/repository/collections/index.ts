import Feed from './feed';
import Item from './item';
import Category from './category';

const Collections: Repo.CollectionDefinition[] = [Feed, Item, Category].map(
  (collection: Repo.CollectionExport): Repo.CollectionDefinition => ({
    ...collection,
    type: 'document',
  }),
);

export default Collections;
