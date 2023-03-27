export const deserializeCsvValueCode = `/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@humandx/plate-test-utils';

jsx;

export const deserializeCsvValue: any = (
  <fragment>
    <hh1>Deserialize CSV</hh1>
    <hp>Copy and paste CSV content into a table.</hp>
    <hp>
      <htext />
    </hp>
  </fragment>
);
`;

export const deserializeCsvValueFile = {
  '/serializing-csv/deserializeCsvValue.tsx': deserializeCsvValueCode,
};
