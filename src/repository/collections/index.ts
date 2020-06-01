import Feed from './feed';
import Item from './item';

const Collections: Repo.CollectionDefinition[] = [Feed, Item].map(
  (collection: Repo.CollectionExport): Repo.CollectionDefinition => ({
    ...collection,
    type: 'document',
  }),
);

export default Collections;
