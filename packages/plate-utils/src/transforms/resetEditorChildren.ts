import { PlateEditor } from '@humandx/plate-core';
import { EElement, Value } from '@humandx/slate';
import {
  replaceNodeChildren,
  ReplaceNodeChildrenOptions,
} from '@humandx/slate-utils';

/**
 * Replace editor children by default block.
 */
export const resetEditorChildren = <V extends Value>(
  editor: PlateEditor<V>,
  options?: Omit<ReplaceNodeChildrenOptions<EElement<V>, V>, 'at' | 'nodes'>
) => {
  replaceNodeChildren<EElement<V>>(editor, {
    at: [],
    nodes: editor.childrenFactory(),
    ...options,
  } as any);
};
