export const renderLeafPreviewCode = `import { RenderLeaf } from '@humandx/plate';
import { PreviewLeaf } from './PreviewLeaf';

export const renderLeafPreview: RenderLeaf = PreviewLeaf;
`;

export const renderLeafPreviewFile = {
  '/preview-markdown/renderLeafPreview.tsx': renderLeafPreviewCode,
};
