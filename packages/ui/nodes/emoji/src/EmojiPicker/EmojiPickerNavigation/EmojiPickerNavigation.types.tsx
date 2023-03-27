import { EmojiCategoryList, UseEmojiPickerType } from '@humandx/plate-emoji';
import { StyledProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';

export interface EmojiPickerNavigationStyles {
  button?: CSSProp;
  selected?: CSSProp;
  bar?: CSSProp;
}

export type EmojiPickerNavigationProps = StyledProps<EmojiPickerNavigationStyles> &
  Pick<
    UseEmojiPickerType,
    'i18n' | 'emojiLibrary' | 'icons' | 'focusedCategory'
  > & {
    onClick: (id: EmojiCategoryList) => void;
  };

export interface EmojiPickerNavigationStyleProps
  extends StyledProps<EmojiPickerNavigationStyles> {}

export type CategoryButtonProps = {
  categoryId: EmojiCategoryList;
};
