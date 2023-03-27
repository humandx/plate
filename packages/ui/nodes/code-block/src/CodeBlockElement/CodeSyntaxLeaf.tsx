import React from 'react';
import { PlatePluginComponent } from '@humandx/plate-common';

export const CodeSyntaxLeaf: PlatePluginComponent = ({
  attributes,
  children,
  leaf,
}) => (
  <span {...attributes}>
    <span className={`prism-token token ${leaf.tokenType}`}>{children}</span>
  </span>
);
