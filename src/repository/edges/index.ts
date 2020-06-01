import HasItems from './hasItems';

const Edges: Repo.EdgeDefinition[] = [HasItems].map(
  (edge: Repo.EdgeExport): Repo.EdgeDefinition => ({
    ...edge,
    type: 'edge',
  }),
);

export default Edges;
