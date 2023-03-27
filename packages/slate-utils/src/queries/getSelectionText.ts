import { getEditorString, TEditor, Value } from '@humandx/slate';

/**
 * Get the selected text.
 * Return empty string if no selection.
 */
export const getSelectionText = <V extends Value>(editor: TEditor<V>) =>
  getEditorString(editor, editor.selection);
