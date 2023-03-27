import { ELEMENT_PARAGRAPH } from '@humandx/plate-paragraph';
import { TElement } from '../../../slate/src/interfaces/element/TElement';
import { createNode } from './createNode';

const output: TElement = { type: ELEMENT_PARAGRAPH, children: [{ text: '' }] };

it('should be', () => {
  expect(createNode()).toEqual(output);
});
