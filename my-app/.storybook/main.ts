/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-vue-addon",
       '@storyboook/addon-viewport'

  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
    staticDirs: ['../public'],

};
export default config;
