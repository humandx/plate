import React from 'react';
import { TEditableProps } from '@humandx/plate-common';
import {
  FloatingLink,
  LaunchIcon,
  LinkIcon,
  LinkOffIcon,
  ShortTextIcon,
  useFloatingLinkSelectors,
} from '@humandx/plate-link';
import { plateButtonCss } from '@humandx/plate-ui-button';
import {
  floatingButtonCss,
  FloatingIconWrapper,
  floatingInputCss,
  FloatingInputWrapper,
  floatingRootCss,
  floatingRowCss,
  FloatingVerticalDivider,
} from '@humandx/plate-ui-toolbar';

export const PlateFloatingLink = ({ readOnly }: TEditableProps) => {
  const isEditing = useFloatingLinkSelectors().isEditing();

  if (readOnly) return null;

  const input = (
    <div tw="flex flex-col w-[330px]">
      <FloatingInputWrapper>
        <FloatingIconWrapper>
          <LinkIcon width={18} />
        </FloatingIconWrapper>

        <FloatingLink.UrlInput
          css={floatingInputCss}
          placeholder="Paste link"
        />
      </FloatingInputWrapper>

      <div tw="h-px bg-gray-200" />

      <FloatingInputWrapper>
        <FloatingIconWrapper>
          <ShortTextIcon width={18} />
        </FloatingIconWrapper>
        <FloatingLink.TextInput
          css={floatingInputCss}
          placeholder="Text to display"
        />
      </FloatingInputWrapper>
    </div>
  );

  const editContent = !isEditing ? (
    <div css={floatingRowCss}>
      <FloatingLink.EditButton css={plateButtonCss}>
        Edit link
      </FloatingLink.EditButton>

      <FloatingVerticalDivider />

      <FloatingLink.OpenLinkButton css={floatingButtonCss}>
        <LaunchIcon width={18} />
      </FloatingLink.OpenLinkButton>

      <FloatingVerticalDivider />

      <FloatingLink.UnlinkButton css={floatingButtonCss}>
        <LinkOffIcon width={18} />
      </FloatingLink.UnlinkButton>
    </div>
  ) : (
    input
  );

  return (
    <>
      <FloatingLink.InsertRoot css={floatingRootCss}>
        {input}
      </FloatingLink.InsertRoot>

      <FloatingLink.EditRoot css={floatingRootCss}>
        {editContent}
      </FloatingLink.EditRoot>
    </>
  );
};
