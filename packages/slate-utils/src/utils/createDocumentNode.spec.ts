import { ELEMENT_PARAGRAPH } from '@humandx/plate-paragraph';
import { Value } from '@humandx/slate';
import { createDocumentNode } from '@humandx/slate-utils';

const output: Value = [
  {
    children: [
      {
        type: ELEMENT_PARAGRAPH,
        children: [{ text: '' }],
      },
    ],
  } as any,
];

it('should be', () => {
  expect(createDocumentNode()).toEqual(output);
});
