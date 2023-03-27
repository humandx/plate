import { PlateEditor, Value } from '@humandx/plate-common';
import { moveListItems } from './moveListItems';

export const indentListItems = <V extends Value>(editor: PlateEditor<V>) => {
  moveListItems(editor, { increase: true });
};
