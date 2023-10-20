import ProductCard from "./ProductCard.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: "Example/ProductCardProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  argTypes: {
    id: 1,
  },
};
export default meta;
type Story = StoryObj<typeof ProductCard>;

// More on writing stories with args: https://storybook.js.org/docs/vue/writing-stories/args
export const Suit: Story = {
  args: {
    id: 2,
    name: "Luxury Suit",
    description: "A description of the luxury suit.",
    price: 750,
    image:
      "https://image.lexica.art/full_jpg/015fb3db-d837-4c46-a8bb-af79606e9b5a",
    slug: "luxury-suit",
  },
};
