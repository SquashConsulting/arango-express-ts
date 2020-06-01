import HasItems from './hasItems';
import HasFeeds from './hasFeeds';

const Edges: Repo.EdgeDefinition[] = [HasItems, HasFeeds].map(
  (edge: Repo.EdgeExport): Repo.EdgeDefinition => ({
    ...edge,
    type: 'edge',
  }),
);

export default Edges;
