export const getNodesWithIdCode = `import { nanoid } from '@humandx/plate';

export const getNodesWithId = (nodes: any[]) => {
  nodes.forEach((node) => {
    node.id = nanoid();
  });

  return nodes;
};
`;

export const getNodesWithIdFile = {
  '/dnd/getNodesWithId.ts': getNodesWithIdCode,
};
