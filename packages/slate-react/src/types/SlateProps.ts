import React from 'react';
import { TDescendant } from '@humandx/slate';
import { UnknownObject } from '@humandx/utils';
import { ReactEditor } from 'slate-react';

export interface SlateProps extends UnknownObject {
  editor: ReactEditor;
  value: TDescendant[];
  children: React.ReactNode;
  onChange: (value: SlateProps['value']) => void;
}
