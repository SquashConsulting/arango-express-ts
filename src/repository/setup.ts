/**
 * This s a script file that can be called by running `npm run setup:repo`
 * NOTE: This file is not meant to be imported elsewhere in the project.
 */

import DB from './database';

import Edges from 'repository/edges';
import Collections from 'repository/collections';

import createCollection, { CreationResult } from './utils/createCollection';

// Create Document Collections
Promise.all(
  Collections.map(
    (collection: Repo.CollectionDefinition): Promise<CreationResult> => {
      console.info(`Creating collection ${collection.name}`);
      return createCollection(DB, collection.name, collection.type);
    },
  ),
);

// Create Edge Collections
Promise.all(
  Edges.map(
    async (edge: Repo.EdgeDefinition): Promise<void> => {
      console.info(`Creating edge collection ${edge.name}`);

      const edgeCollection: CreationResult = await createCollection(
        DB,
        edge.name,
        edge.type,
      );

      edgeCollection.ensureIndex({
        type: 'hash',
        fields: ['_from', '_to'],
      });
    },
  ),
);
