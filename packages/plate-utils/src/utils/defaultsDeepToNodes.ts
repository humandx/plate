import { applyDeepToNodes, ApplyDeepToNodesOptions } from '@humandx/plate-core';
import { TNode } from '@humandx/slate';
import defaults from 'lodash/defaults';

/**
 * Recursively merge a source object to children nodes with a query.
 */
export const defaultsDeepToNodes = <N extends TNode>(
  options: Omit<ApplyDeepToNodesOptions<N>, 'apply'>
) => {
  applyDeepToNodes({ ...options, apply: defaults });
};
