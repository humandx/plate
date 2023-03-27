import { Value } from '@humandx/slate';
import { RenderFunction } from '../misc/RenderFunction';
import { PlateRenderElementProps } from '../PlateRenderElementProps';
import { PlateRenderLeafProps } from '../PlateRenderLeafProps';

export type SerializeHtml<V extends Value = Value> = RenderFunction<
  PlateRenderElementProps<V> & PlateRenderLeafProps<V>
>;
