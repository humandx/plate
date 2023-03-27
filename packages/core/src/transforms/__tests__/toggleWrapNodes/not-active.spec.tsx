/** @jsx jsx */
import { ELEMENT_CODE_BLOCK } from '@humandx/plate-code-block/src/constants';
import { jsx } from '@humandx/plate-test-utils';
import { toggleWrapNodes } from '../../../../../slate-utils/src/transforms';

jsx;

const input = (
  <editor>
    <hp>
      test
      <cursor />
    </hp>
  </editor>
) as any;

const output = (
  <editor>
    <hcodeblock>
      <hp>
        test
        <cursor />
      </hp>
    </hcodeblock>
  </editor>
) as any;

it('should be', () => {
  toggleWrapNodes(input, ELEMENT_CODE_BLOCK);

  expect(input.children).toEqual(output.children);
});
