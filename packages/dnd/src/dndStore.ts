import { createStore } from '@humandx/plate-common';

export const dndStore = createStore('dnd')({
  isDragging: false,
});
