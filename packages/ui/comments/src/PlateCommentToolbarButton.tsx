import React from 'react';
import { useCommentAddButton } from '@humandx/plate-comments';
import { ToolbarButton, ToolbarButtonProps } from '@humandx/plate-ui-toolbar';

export const PlateCommentToolbarButton = (props: ToolbarButtonProps) => {
  const buttonProps = useCommentAddButton(props as any);

  return <ToolbarButton {...(buttonProps as any)} />;
};
