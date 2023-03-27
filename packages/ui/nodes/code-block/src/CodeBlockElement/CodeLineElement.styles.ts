import { Value } from '@humandx/plate-common';
import {
  createStyles,
  StyledElementProps,
} from '@humandx/plate-styled-components';

export const getCodeLineElementStyles = <V extends Value>(
  props: StyledElementProps<V>
) =>
  createStyles(
    { prefixClassNames: 'CodeLineElement', ...props },
    {
      root: [{}],
    }
  );
