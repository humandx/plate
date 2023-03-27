import { EDescendant, TEditor, TOperation, Value } from '@humandx/slate';

/**
 * Get typed editor operations.
 */
export const getOperations = <V extends Value>(editor: TEditor<V>) =>
  editor.operations as TOperation<EDescendant<V>>[];
