import type { Meta, StoryObj } from "@storybook/vue3";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import Footer from "./Footer.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: "Example/Footer",
  component: Footer,
  tags: ["autodocs"],
  argTypes: {},  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const DefaultViewFooter: Story = {
  args: {},
};


export const IphoneXFooter: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};