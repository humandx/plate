import React from 'react';
import { EmojiItemData } from '@humandx/plate-emoji';
import { ComboboxItemProps } from '@humandx/plate-ui-combobox';

export const EmojiComboboxItem = ({
  item,
}: ComboboxItemProps<EmojiItemData>): JSX.Element => {
  const {
    data: { id, emoji },
  } = item;

  return (
    <div>
      {emoji} :{id}:
    </div>
  );
};
