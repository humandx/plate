import { Value } from '@humandx/plate-common';
import { TTodoListItemElement } from '@humandx/plate-list';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';

export interface TodoListElementStyleProps<V extends Value>
  extends TodoListElementProps<V> {
  checked?: boolean;
}

export interface TodoListElementStyles {
  checkboxWrapper: CSSProp;
  checkbox: CSSProp;
  text: CSSProp;
  rootChecked?: CSSProp;
}

export type TodoListElementProps<V extends Value> = StyledElementProps<
  V,
  TTodoListItemElement,
  TodoListElementStyles
>;
