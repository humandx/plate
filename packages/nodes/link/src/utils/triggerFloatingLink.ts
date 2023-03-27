import { PlateEditor, Value } from '@humandx/plate-common';
import { floatingLinkSelectors } from '../components/index';
import { triggerFloatingLinkEdit } from './triggerFloatingLinkEdit';
import { triggerFloatingLinkInsert } from './triggerFloatingLinkInsert';

export const triggerFloatingLink = <V extends Value>(
  editor: PlateEditor<V>,
  {
    focused,
  }: {
    focused?: boolean;
  } = {}
) => {
  if (floatingLinkSelectors.mode() === 'edit') {
    triggerFloatingLinkEdit(editor);
    return;
  }

  triggerFloatingLinkInsert(editor, {
    focused,
  });
};
