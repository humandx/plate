export const createElementCode = `import { ELEMENT_PARAGRAPH, TText } from '@humandx/plate';

export const createElement = (
  text = '',
  {
    type = ELEMENT_PARAGRAPH,
    mark,
  }: {
    type?: string;
    mark?: string;
  } = {}
) => {
  const leaf: TText = { text };
  if (mark) {
    leaf[mark] = true;
  }

  return {
    type,
    children: [leaf],
  };
};
`;

export const createElementFile = {
  '/basic-plugins/createElement.ts': createElementCode,
};
