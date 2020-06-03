import { Database, DocumentCollection, EdgeCollection } from 'arangojs';

/* Type Definitions */
export type CreationResult = DocumentCollection | EdgeCollection;

/* Module Exports */
export default createCollection;

/* Module Functions */
async function createCollection(
  DB: Database,
  name: string,
  type: 'edge',
): Promise<EdgeCollection>;
async function createCollection(
  DB: Database,
  name: string,
  type: 'document',
): Promise<DocumentCollection>;
async function createCollection(
  DB: Database,
  name: string,
  type: Repo.CollectionType,
): Promise<CreationResult> {
  const collection =
    type === 'edge' ? DB.edgeCollection(name) : DB.collection(name);

  const collectionExists = await collection.exists();
  if (collectionExists) return collection;

  await collection.create();

  return collection;
}
