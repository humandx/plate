import { Hotkeys, KeyboardHandlerReturnType } from '@humandx/plate-common';

export const onKeyDownSingleLine = (): KeyboardHandlerReturnType => (event) => {
  if (event.defaultPrevented) return;

  if (Hotkeys.isSplitBlock(event)) {
    event.preventDefault();
  }
};
