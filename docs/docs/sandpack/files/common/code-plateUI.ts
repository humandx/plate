export const plateUiCode = `import {
  CodeBlockElement,
  createPlateUI,
  ELEMENT_CODE_BLOCK,
  ELEMENT_PARAGRAPH,
  StyledElement,
  withProps,
} from '@humandx/plate';

export const plateUI = createPlateUI({
  [ELEMENT_CODE_BLOCK]: CodeBlockElement,
  [ELEMENT_PARAGRAPH]: withProps(StyledElement, {
    // as: 'p',
    styles: {
      root: {
        margin: 0,
        padding: '4px 0',
      },
    },
    prefixClassNames: 'p',
  }),
});
`;

export const plateUiFile = {
  '/common/plateUI.ts': plateUiCode,
};
