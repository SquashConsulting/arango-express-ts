import { Document } from "arangojs/lib/cjs/util/types";
import { DocumentCollection, EdgeCollection } from "arangojs";

/* Exports */
export default modelBuilder;

/* Module Functions */
function modelBuilder<T extends object = any>(
  Collection: DocumentCollection<T> | EdgeCollection<T>
) {
  return {
    get,
    find,
    findOne,
    create,
    edit,
    remove
  };

  function get(id: string): Promise<Document<T>> {
    return Collection.document({ _key: id });
  }

  async function find(searchObject: Document): Promise<Document<T>[]> {
    const cursor = await Collection.byExample(searchObject);
    return cursor.all();
  }

  function findOne(searchObject: Document): Promise<Document<T>> {
    return Collection.firstExample(searchObject);
  }

  async function create(body: T): Promise<Document<T>> {
    const meta: Arango.InsertResults = await Collection.save(body);

    return { ...meta, ...body };
  }

  async function edit(id: string, body: T): Promise<Document<T>> {
    const meta: Arango.InsertResults = await Collection.update(
      { _key: id },
      body
    );

    return { ...meta, ...body };
  }

  async function remove(id: string): Promise<void> {
    Collection.remove({ _key: id });
  }
}
