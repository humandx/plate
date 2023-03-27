import { nanoid } from '@humandx/plate';

export const getNodesWithId = (nodes: any[]) => {
  nodes.forEach((node) => {
    node.id = nanoid();
  });

  return nodes;
};
