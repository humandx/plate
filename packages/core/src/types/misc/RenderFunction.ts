import { AnyObject } from '@humandx/utils';

/**
 * Render function interface for providing overrideable render callbacks.
 */
export interface RenderFunction<P = AnyObject> {
  (
    props: P,
    defaultRender?: (props?: P) => JSX.Element | null
  ): JSX.Element | null;
}
