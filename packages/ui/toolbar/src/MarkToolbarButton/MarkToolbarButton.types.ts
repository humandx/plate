import {
  ToggleMarkPlugin,
  Value,
  WithPlatePlugin,
} from '@humandx/plate-common';
import { ToolbarButtonProps } from '../ToolbarButton/ToolbarButton.types';

export interface MarkToolbarButtonProps<V extends Value>
  extends ToolbarButtonProps,
    Pick<WithPlatePlugin<V>, 'type'>,
    Pick<ToggleMarkPlugin, 'clear'> {}
