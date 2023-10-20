import type { Meta, StoryObj } from "@storybook/vue3";
import Zoomer from "./Zoomer.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Zoomer> = {
  title: "Example/Zoomer",
  component: Zoomer,
  tags: ["autodocs"],
  argTypes: {
    link: {
      type: String,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Zoomer>;

export const Dress: Story = {
  args: {
    link: "https://lexica.art/prompt/d29ce5b8-95ea-43f6-b781-7f15bdb34acf",
  },
};
