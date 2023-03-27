import { TCloudAttachmentElement } from '@humandx/plate-cloud';
import { Value } from '@humandx/plate-common';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';
import { CloudStatusBarStyles } from '../StatusBar/StatusBar.types';

export interface CloudAttachmentElementStyleProps<V extends Value>
  extends CloudAttachmentElementProps<V> {
  selected?: boolean;
  focused?: boolean;
}

export interface CloudAttachmentElementProps<V extends Value>
  extends StyledElementProps<
    V,
    TCloudAttachmentElement,
    CloudAttachmentElementStyles
  > {}

export interface CloudAttachmentElementStyles extends CloudStatusBarStyles {
  attachmentContainer: CSSProp;
  attachmentIcon: CSSProp;
  bodyContainer: CSSProp;
  bodyFilename: CSSProp;
  bodyCaption: CSSProp;
  downloadContainer: CSSProp;
  downloadIcon: CSSProp;
}
