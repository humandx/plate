/** @jsx jsx */

import { jsx } from '@humandx/plate-test-utils';
import { Range } from 'slate';
import { PlateEditor } from '../../../../../core/src/types/PlateEditor';
import { isWordAfterTrigger } from '../../index';

jsx;

const input = ((
  <editor>
    <hp>
      @pré
      <cursor /> test2
    </hp>
  </editor>
) as any) as PlateEditor;

const at = Range.start(input.selection as Range);

const output = 'pré';

it('should be', () => {
  expect(isWordAfterTrigger(input, { at, trigger: '@' }).match?.[1]).toBe(
    output
  );
});
