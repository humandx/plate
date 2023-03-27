import React, { FunctionComponent } from 'react';
import { PlateRenderElementProps } from '@humandx/plate-core';
import { Value } from '@humandx/slate';

export const createNodeHOC = <V extends Value, T>(
  HOC: FunctionComponent<T>
) => (Component: any, props: T) => (
  childrenProps: PlateRenderElementProps<V>
) => (
  <HOC {...childrenProps} {...props}>
    <Component {...childrenProps} />
  </HOC>
);
