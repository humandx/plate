import {
  createBlockquotePlugin,
  createCodeBlockPlugin,
  createHeadingPlugin,
  createParagraphPlugin,
} from '@humandx/plate';
import { plateUI } from '../common/plateUI';
import { createMyPlugins } from '../typescript/plateTypes';

export const basicElementsPlugins = createMyPlugins(
  [
    createBlockquotePlugin(),
    createCodeBlockPlugin(),
    createHeadingPlugin(),
    createParagraphPlugin(),
  ],
  {
    components: plateUI,
  }
);
