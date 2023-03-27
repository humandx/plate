/** @jsx jsx */

import { ELEMENT_BLOCKQUOTE } from '@humandx/plate-block-quote/src/createBlockquotePlugin';
import { jsx } from '@humandx/plate-test-utils';
import { Value } from '@humandx/slate';
import { PlateEditor } from '../../../types/PlateEditor';
import { toggleNodeType } from '../../toggleNodeType';

jsx;

const input = ((
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any) as PlateEditor;

const output = (
  <editor>
    <hblockquote>
      test
      <cursor />
    </hblockquote>
  </editor>
) as any;

it('should be', () => {
  toggleNodeType(input, { activeType: ELEMENT_BLOCKQUOTE });

  expect(input.children).toEqual(output.children);
});
