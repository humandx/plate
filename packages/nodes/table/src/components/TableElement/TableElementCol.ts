import {
  createComponentAs,
  createElementAs,
  HTMLPropsAs,
} from '@humandx/plate-common';

export const TableElementCol = createComponentAs<HTMLPropsAs<'col'>>((props) =>
  createElementAs('col', props)
);
