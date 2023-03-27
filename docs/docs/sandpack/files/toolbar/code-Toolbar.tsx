export const toolbarCode = `import React from 'react';
import { HeadingToolbar, ToolbarProps } from '@humandx/plate';

export const Toolbar = (props: ToolbarProps) => <HeadingToolbar {...props} />;
`;

export const toolbarFile = {
  '/toolbar/Toolbar.tsx': toolbarCode,
};
