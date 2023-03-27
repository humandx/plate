export const cursorStoreCode = `import { createStore } from '@humandx/plate';

export const cursorStore = createStore('cursor')({
  cursors: {},
});
`;

export const cursorStoreFile = {
  '/cursor-overlay/cursorStore.ts': cursorStoreCode,
};
