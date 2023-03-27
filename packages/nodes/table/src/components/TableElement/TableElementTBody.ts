import {
  createComponentAs,
  createElementAs,
  HTMLPropsAs,
} from '@humandx/plate-common';

export const TableElementTBody = createComponentAs<HTMLPropsAs<'tbody'>>(
  (props) => createElementAs('tbody', props)
);
