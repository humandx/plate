import { Value } from '@humandx/plate-common';
import { createStyles } from '@humandx/plate-styled-components';
import tw from 'twin.macro';
import { ExcalidrawElementProps } from './ExcalidrawElement.types';

export const getExcalidrawElementStyles = <V extends Value>(
  props: ExcalidrawElementProps<V>
) =>
  createStyles(
    { prefixClassNames: 'ExcalidrawElement', ...props },
    {
      excalidrawWrapper: tw`h-[600px]`,
    }
  );
