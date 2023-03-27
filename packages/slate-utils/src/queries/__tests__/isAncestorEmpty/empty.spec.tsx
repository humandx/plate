/** @jsx jsx */

import { jsx } from '@humandx/plate-test-utils';
import { PlateEditor } from '../../../../../core/src/types/PlateEditor';
import { isAncestorEmpty } from '../../index';

jsx;

const input = ((
  <hp>
    <cursor />
  </hp>
) as any) as PlateEditor;

const output = true;

it('should be', () => {
  expect(isAncestorEmpty(input, input)).toEqual(output);
});
