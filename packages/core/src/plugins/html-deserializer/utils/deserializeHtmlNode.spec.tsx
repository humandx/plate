/** @jsx jsx */

import { getHtmlDocument, jsx } from '@humandx/plate-test-utils';
import { createPlateUIEditor } from '../../../../../ui/plate/src/utils/createPlateUIEditor';
import { deserializeHtmlNode } from './deserializeHtmlNode';

jsx;

describe('when element has a br', () => {
  const editor = createPlateUIEditor({ plugins: [] });

  const html = `<html><body>test<br /></body></html>`;
  const element = getHtmlDocument(html).body;

  const output = (
    <editor>
      <htext>test{'\n'}</htext>
    </editor>
  ) as any;

  it('should have the break line', () => {
    expect(deserializeHtmlNode(editor)(element)).toEqual(output.children);
  });
});
