const { mergeConfig } = require('vite');
const { default: viteTsConfigPaths } = require('vite-tsconfig-paths');

module.exports = {
  stories: [
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [viteTsConfigPaths()],
    });
  },
};
