import '@testing-library/jest-dom/extend-expect';
import 'slate-test-utils/dist/cjs/mocks';

jest.spyOn(global.console, 'warn').mockImplementation(() => jest.fn());
jest.spyOn(global.console, 'error').mockImplementation(() => jest.fn());

jest.mock('@humandx/plate-core', () => ({
  __esModule: true,
  // @ts-ignore
  ...jest.requireActual('@humandx/plate-core'),
}));
