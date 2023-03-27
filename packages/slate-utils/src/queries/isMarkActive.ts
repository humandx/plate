import { TEditor, Value } from '@humandx/slate';
import { isDefined } from '@humandx/utils';
import { getMark } from './getMark';

/**
 * Is the mark defined in the selection.
 */
export const isMarkActive = <V extends Value>(
  editor: TEditor<V>,
  type: string
) => {
  return isDefined(getMark(editor, type));
};
