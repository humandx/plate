const packageJsonPlate = require('@humandx/plate/package.json');
const packageJsonExcalidraw = require('@humandx/plate-ui-excalidraw/package.json');
const packageJsonTestUtils = require('@humandx/plate-test-utils/package.json');
const packageJsonJuice = require('@humandx/plate-juice/package.json');
const packageJsonSelection = require('@humandx/plate-selection/package.json');
const packageJsonCloud = require('@humandx/plate-cloud/package.json');
const packageJsonCloudUi = require('@humandx/plate-ui-cloud/package.json');
const packageJsonDnd = require('@humandx/plate-dnd/package.json');
const packageJsonDndUi = require('@humandx/plate-ui-dnd/package.json');
const { sandpackPath } = require('./plop-config');

const templateVersions = `export const plateVersion = '${packageJsonPlate.version}';
export const testUtilsVersion = '${packageJsonTestUtils.version}';
export const excalidrawVersion = '${packageJsonExcalidraw.version}';
export const juiceVersion = '${packageJsonJuice.version}';
export const selectionVersion = '${packageJsonSelection.version}';
export const cloudVersion = '${packageJsonCloud.version}';
export const cloudUiVersion = '${packageJsonCloudUi.version}';
export const dndVersion = '${packageJsonDnd.version}';
export const dndUiVersion = '${packageJsonDndUi.version}';
`;

module.exports = (_plop) => {
  /** @type {import('plop').NodePlopAPI} */
  const plop = _plop;

  plop.setGenerator('version', {
    description: 'Update Sandpack dependencies',
    prompts: [],
    actions: [
      {
        type: 'add',
        template: templateVersions,
        path: `${sandpackPath}/plate-versions.ts`,
        force: true,
      },
    ],
  });
};
