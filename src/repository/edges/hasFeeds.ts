import DB from 'repository/database';
import { EdgeCollection } from 'arangojs';

/* Constants */
const name = 'has_feeds';
const collection: EdgeCollection<Repo.HasFeeds> = DB.edgeCollection(name);

/* Exports */
const defaultExport: Repo.EdgeExport = { name, collection };
export default defaultExport;
