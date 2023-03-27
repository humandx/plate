import { createNodesWithHOC, RenderFunction } from '@humandx/plate-common';
import { withDraggable, WithDraggableOptions } from '@humandx/plate-dnd';
import { PlateDraggable, PlateDraggableProps } from './PlateDraggable';

export const withPlateDraggable = (
  Component: RenderFunction<any>,
  options?: WithDraggableOptions<
    Partial<Omit<PlateDraggableProps, 'editor' | 'element' | 'children'>>
  >
) =>
  withDraggable<PlateDraggableProps>(PlateDraggable, Component, options as any);

export const withPlateDraggables = createNodesWithHOC(withPlateDraggable);
