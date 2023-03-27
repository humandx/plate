import {
  ExcalidrawProps,
  LibraryItems,
} from '@excalidraw/excalidraw/types/types';
import { Value } from '@humandx/plate-common';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';
import { TExcalidrawElement } from '../../types';

export interface ExcalidrawElementStyles {
  excalidrawWrapper: CSSProp;
}

export interface ExcalidrawElementProps<V extends Value>
  extends StyledElementProps<V, TExcalidrawElement, ExcalidrawElementStyles> {
  scrollToContent?: boolean;

  libraryItems?: LibraryItems;

  excalidrawProps?: ExcalidrawProps;
}
