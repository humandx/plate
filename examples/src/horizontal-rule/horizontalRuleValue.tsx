/** @jsxRuntime classic */
/** @jsx jsx */
import { ELEMENT_HR } from '@humandx/plate';
import { jsx } from '@humandx/plate-test-utils';

jsx;

export const horizontalRuleValue: any = (
  <fragment>
    <hp>This is a paragraph.</hp>
    <element type={ELEMENT_HR}>
      <htext />
    </element>
    <hp>And this is another paragraph.</hp>
    <element type={ELEMENT_HR}>
      <htext />
    </element>
    <hp>But between those paragraphs are horizontal rules.</hp>
  </fragment>
);
