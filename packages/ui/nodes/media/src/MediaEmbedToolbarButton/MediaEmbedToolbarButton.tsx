import React from 'react';
import {
  focusEditor,
  useEventPlateId,
  usePlateEditorRef,
} from '@humandx/plate-common';
import { insertMediaEmbed } from '@humandx/plate-media';
import { ToolbarButton, ToolbarButtonProps } from '@humandx/plate-ui-toolbar';

export interface MediaEmbedToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onClick is getting the embed url by calling this promise before inserting the embed.
   */
  getEmbedUrl?: () => Promise<string>;
}

export const MediaEmbedToolbarButton = ({
  id,
  getEmbedUrl,
  ...props
}: MediaEmbedToolbarButtonProps) => {
  const editor = usePlateEditorRef(useEventPlateId(id));

  return (
    <ToolbarButton
      tooltip={{ content: 'Embed' }}
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();

        let url;
        if (getEmbedUrl) {
          url = await getEmbedUrl();
        } else {
          url = window.prompt('Enter the URL of the embed:');
        }
        if (!url) return;

        insertMediaEmbed(editor, { url });
        focusEditor(editor);
      }}
      {...props}
    />
  );
};
