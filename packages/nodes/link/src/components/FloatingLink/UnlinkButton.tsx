import { useCallback } from 'react';
import { Button } from '@humandx/plate-button';
import {
  AsProps,
  createComponentAs,
  createElementAs,
  focusEditor,
  HTMLPropsAs,
  useEditorRef,
} from '@humandx/plate-common';
import { unwrapLink } from '../../transforms/index';

export const useUnlinkButton = (
  props: HTMLPropsAs<'button'>
): HTMLPropsAs<'button'> => {
  const editor = useEditorRef();

  return {
    onClick: useCallback(() => {
      unwrapLink(editor);
      focusEditor(editor, editor.selection!);
    }, [editor]),
    ...props,
  };
};

export const UnlinkButton = createComponentAs<AsProps<'button'>>((props) => {
  const htmlProps = useUnlinkButton(props);

  return createElementAs(Button, htmlProps);
});
