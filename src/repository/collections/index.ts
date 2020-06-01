import User from './user';

const Collections: Repo.CollectionDefinition[] = [User].map(
  (collection: Repo.CollectionExport): Repo.CollectionDefinition => ({
    ...collection,
    type: 'document',
  }),
);

export default Collections;
