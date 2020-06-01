import joi from 'joi';
import { DocumentCollection, EdgeCollection } from 'arangojs';

declare global {
  namespace Repo {
    type DateTimestamp = string;
    type CollectionType = 'edge' | 'document';

    interface CollectionExport {
      name: string;
      schema: joi.ObjectSchema;
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
