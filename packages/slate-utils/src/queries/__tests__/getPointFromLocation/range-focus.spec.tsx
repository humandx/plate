/** @jsx jsx */

import { jsx } from '@humandx/plate-test-utils';
import { PlateEditor } from '../../../../../core/src/types/PlateEditor';
import { getPointFromLocation } from '../../getPointFromLocation';

jsx;

const input = ((
  <editor>
    <hp>
      tes
      <anchor />
      tt
      <focus />
    </hp>
  </editor>
) as any) as PlateEditor;

const output = {
  offset: 5,
  path: [0, 0],
};

it('should be', () => {
  expect(getPointFromLocation(input, { focus: true })).toEqual(output);
});
