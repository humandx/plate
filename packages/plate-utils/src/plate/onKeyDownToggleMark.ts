import {
  KeyboardHandlerReturnType,
  PlateEditor,
  ToggleMarkPlugin,
  WithPlatePlugin,
} from '@humandx/plate-core';
import { Value } from '@humandx/slate';
import { toggleMark } from '@humandx/slate-utils';
import isHotkey from 'is-hotkey';

export const onKeyDownToggleMark = <
  V extends Value = Value,
  E extends PlateEditor<V> = PlateEditor<V>
>(
  editor: E,
  { type, options: { hotkey, clear } }: WithPlatePlugin<ToggleMarkPlugin, V, E>
): KeyboardHandlerReturnType => (e) => {
  if (e.defaultPrevented) return;
  if (!hotkey) return;

  if (isHotkey(hotkey, e as any)) {
    e.preventDefault();
    // @ts-ignore
    toggleMark(editor, { key: type as any, clear });
  }
};
