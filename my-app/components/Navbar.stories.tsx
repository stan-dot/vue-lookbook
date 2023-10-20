import type { Meta, StoryObj } from "@storybook/vue3";
import Navbar from "./Navbar.vue";

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Navbar> = {
  title: "Example/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const IphoneXNavbar: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "iphonex",
    },
  },
};

export const DefaultViewNavbar: Story = {
  args: {},
};
