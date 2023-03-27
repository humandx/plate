import { TEditor, Value } from '@humandx/slate';
import { TReactEditor } from '@humandx/slate-react';
import { withReact } from 'slate-react';

export const withTReact = <
  V extends Value = Value,
  E extends TEditor<V> = TEditor<V>,
  EE extends E = E & TReactEditor<V>
>(
  editor: E
) => (withReact(editor as any) as any) as EE;
