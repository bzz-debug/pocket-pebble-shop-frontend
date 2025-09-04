import { createContext } from "react";

interface BasketItem {
  item_id: number;
  name: string;
  price: number;
  quantity: number;
  // Add other properties as needed
}

// Define your context types
interface BasketContextType {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
}

interface ItemContextType {
  basketItem: BasketItem | null;
  setBasketItem: React.Dispatch<React.SetStateAction<BasketItem | null>>;
}

export const BasketContext = createContext<BasketContextType>({
  basket: [],
  setBasket: () => {},
});

export const ItemContext = createContext<ItemContextType>({
  basketItem: null,
  setBasketItem: () => {},
});
