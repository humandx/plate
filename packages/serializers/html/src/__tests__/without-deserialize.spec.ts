import { createParagraphPlugin } from '@humandx/plate-paragraph';
import { ELEMENT_PARAGRAPH } from '@humandx/plate-paragraph/src/createParagraphPlugin';
import { createPlateUIEditor } from '@humandx/plate-ui/src/utils/createPlateUIEditor';
import { serializeHtml } from '../serializeHtml';

describe('when there is no deserializer', () => {
  it('not serialize', () => {
    const plugin = createParagraphPlugin({
      serializeHtml: null,
    });

    expect(
      serializeHtml(
        createPlateUIEditor({
          plugins: [plugin],
        }),
        {
          nodes: [
            {
              type: ELEMENT_PARAGRAPH,
              children: [{ text: 'I am centered text!' }],
            },
          ],
        }
      )
    ).toBe('<div>I am centered text!</div>');
  });
});
