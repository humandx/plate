import { createBlockquotePlugin } from '@humandx/plate-block-quote';
import { createCodeBlockPlugin } from '@humandx/plate-code-block';
import { createPluginFactory } from '@humandx/plate-common';
import { createHeadingPlugin } from '@humandx/plate-heading';
import { createParagraphPlugin } from '@humandx/plate-paragraph';

/**
 * Enables support for basic elements:
 * - Block quote
 * - Code block
 * - Heading
 * - Paragraph
 */
export const createBasicElementsPlugin = createPluginFactory({
  key: 'basicElements',
  plugins: [
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
  ],
});
