import React from 'react';
import { Value } from '@humandx/plate-common';
import {
  getRootProps,
  StyledElementProps,
} from '@humandx/plate-styled-components';
import { getBlockquoteElementStyles } from './BlockquoteElement.styles';

export const BlockquoteElement = <V extends Value>(
  props: StyledElementProps<V>
) => {
  const { attributes, children, nodeProps } = props;

  const rootProps = getRootProps(props);
  const { root } = getBlockquoteElementStyles(props);

  return (
    <blockquote
      {...attributes}
      css={root.css}
      className={root.className}
      {...rootProps}
      {...nodeProps}
    >
      {children}
    </blockquote>
  );
};
