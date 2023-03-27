import React from 'react';
import { Value } from '@humandx/plate-common';
import { Link, TLinkElement } from '@humandx/plate-link';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { getLinkElementStyles } from './LinkElement.styles';

export const LinkElement = (props: StyledElementProps<Value, TLinkElement>) => {
  const { as, ...rootProps } = props;

  const { root } = getLinkElementStyles(props);

  return <Link.Root {...rootProps} css={root.css} />;
};
