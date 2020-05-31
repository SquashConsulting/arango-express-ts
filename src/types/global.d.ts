import joi from 'joi';

declare global {
  namespace Repo {
    type CollectionType = 'edge' | 'document';

    interface CollectionExport {
      name: string;
      schema: joi.ObjectSchema;
    }

    interface CollectionDefinition extends CollectionExport {
      type: CollectionType;
    }

    interface EdgeExport {
      name: string;
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
