import {
  EmojiCombobox,
  EmojiPlugin,
  RenderAfterEditable,
} from '@humandx/plate';
import { MyPlatePlugin, MyValue } from '../typescript/plateTypes';

export const emojiPlugin: Partial<MyPlatePlugin<EmojiPlugin>> = {
  renderAfterEditable: EmojiCombobox as RenderAfterEditable<MyValue>,
};
