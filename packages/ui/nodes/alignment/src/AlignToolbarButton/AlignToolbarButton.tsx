import React from 'react';
import { Alignment, KEY_ALIGN, setAlign } from '@humandx/plate-alignment';
import {
  focusEditor,
  isCollapsed,
  someNode,
  useEventPlateId,
  usePlateEditorState,
} from '@humandx/plate-common';
import { ToolbarButton, ToolbarButtonProps } from '@humandx/plate-ui-toolbar';

export interface AlignToolbarButtonProps extends ToolbarButtonProps {
  value: Alignment;
  pluginKey?: string;
}

export const AlignToolbarButton = ({
  id,
  value,
  pluginKey = KEY_ALIGN,
  ...props
}: AlignToolbarButtonProps) => {
  const editor = usePlateEditorState(useEventPlateId(id));

  const active =
    isCollapsed(editor?.selection) &&
    someNode(editor!, { match: { [pluginKey]: value } });

  return (
    <ToolbarButton
      active={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        setAlign(editor, {
          value,
          key: pluginKey,
        });

        focusEditor(editor);
      }}
      {...props}
    />
  );
};
