import {
  AsProps,
  createComponentAs,
  createElementAs,
} from '@humandx/plate-common';

export const DraggableBlockToolbarWrapper = createComponentAs<AsProps<'div'>>(
  (props) => createElementAs('div', props)
);
