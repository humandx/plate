import { Value } from '@humandx/plate-common';
import { StyledElementProps } from '@humandx/plate-styled-components';

export interface PlaceholderProps<V extends Value>
  extends StyledElementProps<V> {
  placeholder: string;
  hideOnBlur?: boolean;
}
