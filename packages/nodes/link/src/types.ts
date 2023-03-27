import { TElement } from '@humandx/plate-common';

export interface TLinkElement extends TElement {
  url: string;
  target?: string;
}
