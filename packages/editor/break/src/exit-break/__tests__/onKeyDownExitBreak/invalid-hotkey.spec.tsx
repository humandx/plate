/** @jsx jsx */

import { mockPlugin } from '@humandx/plate-common';
import { jsx } from '@humandx/plate-test-utils';
import { onKeyDownExitBreak } from '../../onKeyDownExitBreak';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const event = new KeyboardEvent('keydown') as any;

const output = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

it('should be', () => {
  onKeyDownExitBreak(input, mockPlugin())(event);
  expect(input.children).toEqual(output.children);
});
