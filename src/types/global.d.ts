import joi from 'joi';
import { DocumentCollection, EdgeCollection } from 'arangojs';

declare global {
  namespace Repo {
    type DateTimestamp = string;
    type CollectionType = 'edge' | 'document';
    type JoiObject = { [key: string]: joi.AnySchema };
    type Schema = joi.ObjectSchema | JoiObject;
    type IndexType =
      | 'ttl'
      | 'geo'
      | 'hash'
      | 'skiplist'
      | 'fulltext'
      | 'persistent';
    type IndexDefinition = { type: IndexType; fields: string[] };

    interface CollectionExport {
      name: string;
      schema: Schema;
      index?: IndexDefinition;
      collection: DocumentCollection;
    }

    interface CollectionDefinition extends CollectionExport {
      type: CollectionType;
    }

    interface EdgeExport {
      name: string;
      collection: EdgeCollection;
    }

    interface EdgeDefinition extends EdgeExport {
      type: CollectionType;
    }
  }

  namespace Arango {
    interface InsertResults {
      _id: string;
      _key: string;
      _rev: string;
    }
  }
}
