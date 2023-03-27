import { createPluginFactory } from '@humandx/plate';
import { decoratePreview } from './decoratePreview';

export const createPreviewPlugin = createPluginFactory({
  key: 'preview-md',
  decorate: decoratePreview,
});
