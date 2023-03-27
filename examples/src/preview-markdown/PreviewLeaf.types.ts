import { StyledProps } from '@humandx/plate';

export interface PreviewLeafStyleProps extends StyledProps {
  bold?: boolean;
  italic?: boolean;
  title?: boolean;
  list?: boolean;
  hr?: boolean;
  blockquote?: boolean;
  code?: boolean;
}
