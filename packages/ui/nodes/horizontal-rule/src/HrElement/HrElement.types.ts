import { TElement, Value } from '@humandx/plate-common';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';

export interface HrElementStyleProps<V extends Value>
  extends HrElementProps<V> {
  selected?: boolean;
  focused?: boolean;
}

export interface HrElementStyles {
  hr: CSSProp;
}

export interface HrElementProps<V extends Value>
  extends StyledElementProps<V, TElement, HrElementStyles> {}
