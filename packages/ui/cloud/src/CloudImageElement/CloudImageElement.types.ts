import { TCloudImageElement } from '@humandx/plate-cloud';
import { Value } from '@humandx/plate-common';
import { StyledElementProps } from '@humandx/plate-styled-components';
import { CSSProp } from 'styled-components';
import { CloudStatusBarStyles } from '../StatusBar/StatusBar.types';

export interface CloudImageElementStyleProps<V extends Value>
  extends CloudImageElementProps<V> {
  selected?: boolean;
  focused?: boolean;
}

export interface CloudImageElementProps<V extends Value>
  extends StyledElementProps<V, TCloudImageElement, CloudImageElementStyles> {}

export interface CloudImageElementStyles extends CloudStatusBarStyles {
  img: CSSProp;
  statusBarContainer: CSSProp;
  // filename: CSSProp;
  // caption: CSSProp;
  // body: CSSProp;
  // download: CSSProp;
  // downloadIcon: CSSProp;
}
