import React from 'react';
import { useSuggestingButton } from '@humandx/plate-suggestion';
import { ToolbarButton, ToolbarButtonProps } from '@humandx/plate-ui-toolbar';

export const PlateSuggestionToolbarButton = (props: ToolbarButtonProps) => {
  const buttonProps = useSuggestingButton(props as any);

  return <ToolbarButton {...(buttonProps as any)} />;
};
