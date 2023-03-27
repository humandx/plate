import { TEditor, Value } from '@humandx/slate';
import { ReactEditor } from 'slate-react';

export type TReactEditor<V extends Value = Value> = TEditor<V> &
  Pick<
    ReactEditor,
    | 'insertData'
    | 'insertFragmentData'
    | 'insertTextData'
    | 'setFragmentData'
    | 'hasRange'
    | 'hasTarget'
    | 'hasEditableTarget'
    | 'hasSelectableTarget'
    | 'isTargetInsideNonReadonlyVoid'
  >;
