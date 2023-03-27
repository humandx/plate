import { useEffect } from 'react';
import {
  findNodePath,
  getPluginOptions,
  unsetNodes,
  useEditorRef,
} from '@humandx/plate-common';
import { ELEMENT_TABLE } from '../../createTablePlugin';
import { getTableColumnCount, getTableOverriddenColSizes } from '../../queries';
import { useTableStore } from '../../stores/tableStore';
import { TablePlugin, TTableElement } from '../../types';

/**
 * Returns colSizes with overrides applied.
 * Unset node.colSizes if `colCount` updates to 1.
 */
export const useTableColSizes = (tableNode: TTableElement): number[] => {
  const editor = useEditorRef();
  const colSizeOverrides = useTableStore().get.colSizeOverrides();

  const { enableUnsetSingleColSize } = getPluginOptions<TablePlugin>(
    editor,
    ELEMENT_TABLE
  );

  const overriddenColSizes = getTableOverriddenColSizes(
    tableNode,
    colSizeOverrides
  );

  const colCount = getTableColumnCount(tableNode);

  useEffect(() => {
    if (
      enableUnsetSingleColSize &&
      colCount < 2 &&
      tableNode.colSizes?.length
    ) {
      unsetNodes(editor, 'colSizes', {
        at: findNodePath(editor, tableNode),
      });
    }
  }, [colCount, enableUnsetSingleColSize, editor, tableNode]);

  return overriddenColSizes;
};
