/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@humandx/plate-test-utils';
import { initialDataExcalidraw } from './initialDataExcalidraw';

jsx;

export const excalidrawValue: any = (
  <fragment>
    <hh2>🎨 Excalidraw</hh2>
    <hp>Embed Excalidraw within your Slate document!</hp>
    <hexcalidraw {...initialDataExcalidraw}>
      <htext />
    </hexcalidraw>
    <hp>Try it out!</hp>
  </fragment>
);
