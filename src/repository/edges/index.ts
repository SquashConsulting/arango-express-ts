const Edges: Repo.EdgeDefinition[] = [].map(
  (edge: Repo.EdgeExport): Repo.EdgeDefinition => ({
    ...edge,
    type: 'edge',
  }),
);

export default Edges;
