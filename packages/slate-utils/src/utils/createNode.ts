import { TElement } from '@humandx/slate';

export const createNode = (type = 'p', text = ''): TElement => ({
  type,
  children: [{ text }],
});
