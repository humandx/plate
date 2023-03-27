export const previewLeafTypesCode = `import { StyledProps } from '@humandx/plate';

export interface PreviewLeafStyleProps extends StyledProps {
  bold?: boolean;
  italic?: boolean;
  title?: boolean;
  list?: boolean;
  hr?: boolean;
  blockquote?: boolean;
  code?: boolean;
}
`;

export const previewLeafTypesFile = {
  '/preview-markdown/PreviewLeaf.types.ts': previewLeafTypesCode,
};
