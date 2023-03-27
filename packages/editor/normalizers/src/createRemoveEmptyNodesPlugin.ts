import { createPluginFactory } from '@humandx/plate-common';
import { withRemoveEmptyNodes } from './withRemoveEmptyNodes';

export interface RemoveEmptyNodesPlugin {
  types?: string | string[];
}

/**
 * @see {@link withRemoveEmptyNodes}
 */
export const createRemoveEmptyNodesPlugin = createPluginFactory<RemoveEmptyNodesPlugin>(
  {
    key: 'removeEmptyNodes',
    withOverrides: withRemoveEmptyNodes,
  }
);
