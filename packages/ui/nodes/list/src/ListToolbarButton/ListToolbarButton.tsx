import React from 'react';
import {
  focusEditor,
  useEventPlateId,
  usePlateEditorState,
} from '@humandx/plate-common';
import { ELEMENT_UL, getListItemEntry, toggleList } from '@humandx/plate-list';
import {
  BlockToolbarButton,
  ToolbarButtonProps,
} from '@humandx/plate-ui-toolbar';

export const ListToolbarButton = ({
  id,
  type = ELEMENT_UL,
  ...props
}: ToolbarButtonProps & { type?: string }) => {
  const editor = usePlateEditorState(useEventPlateId(id));

  const res = !!editor?.selection && getListItemEntry(editor);

  return (
    <BlockToolbarButton
      active={!!res && res.list[0].type === type}
      type={type}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        toggleList(editor, { type });
        focusEditor(editor);
      }}
      {...props}
    />
  );
};
