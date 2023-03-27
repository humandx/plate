import { HTMLAttributes } from 'react';
import { StyledProps } from '@humandx/plate-styled-components';

export interface ToolbarProps
  extends StyledProps,
    HTMLAttributes<HTMLDivElement> {
  children?: any;
}
