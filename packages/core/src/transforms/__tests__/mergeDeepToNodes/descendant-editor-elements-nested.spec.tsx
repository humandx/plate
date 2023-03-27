/** @jsx jsx */

import { ELEMENT_LI } from '@humandx/plate-list/src/createListPlugin';
import { ELEMENT_PARAGRAPH } from '@humandx/plate-paragraph/src/createParagraphPlugin';
import { jsx } from '@humandx/plate-test-utils';
import { isDescendant } from '@humandx/slate';
import { mergeDeepToNodes } from '../../../utils/mergeDeepToNodes';

jsx;

const node = (
  <editor>
    <hli>
      test
      <hp>test</hp>test
    </hli>
  </editor>
) as any;

const props = { a: 1 };

const output = (
  <editor>
    <element type={ELEMENT_LI} a={1}>
      <htext a={1}>test</htext>
      <element type={ELEMENT_PARAGRAPH} a={1}>
        <htext a={1}>test</htext>
      </element>
      <htext a={1}>test</htext>
    </element>
  </editor>
) as any;

it('should set props to all descendants', () => {
  mergeDeepToNodes({
    node,
    source: props,
    query: {
      filter: ([n]) => isDescendant(n),
    },
  });
  expect(node.children).toEqual(output.children);
});
