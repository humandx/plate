/** @jsx jsx */

import { createLinkPlugin } from '@humandx/plate-link';
import { jsx } from '@humandx/plate-test-utils';
import { PlateEditor } from '../../../../../core/src/types/PlateEditor';
import { createPlateEditor } from '../../../../../core/src/utils/createPlateEditor';
import { isBlockTextEmptyAfterSelection } from '../../isBlockTextEmptyAfterSelection';

jsx;

const input = ((
  <editor>
    <hp>
      <htext>first</htext>
      <ha>
        test
        <cursor />
      </ha>
      <htext />
    </hp>
  </editor>
) as any) as PlateEditor;

const output = true;

it('should be', () => {
  const editor = createPlateEditor({
    editor: input,
    plugins: [createLinkPlugin()],
  });

  expect(isBlockTextEmptyAfterSelection(editor)).toEqual(output);
});
