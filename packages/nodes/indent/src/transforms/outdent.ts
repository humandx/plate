import { PlateEditor, Value } from '@humandx/plate-common';
import { setIndent, SetIndentOptions } from './setIndent';

/**
 * Decrease the indentation of the selected blocks.
 */
export const outdent = <V extends Value>(
  editor: PlateEditor<V>,
  options?: SetIndentOptions<V>
) => {
  setIndent(editor, { offset: -1, ...options });
};
