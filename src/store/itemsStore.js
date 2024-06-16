import { create } from "zustand";
import { persist } from "zustand/middleware";

import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        set((state) => {
          const newItem = {
            id: new Date().getTime(),
            text: newItemText,
            packed: false,
          };

          return { items: [...state.items, newItem] };
        });
      },
      deleteItem: (itemId) => {
        set((state) => {
          return { items: state.items.filter((item) => item.id !== itemId) };
        });
      },
      toggleItem: (itemId) => {
        set((state) => {
          const newItems = state.items.map((item) => (item.id === itemId ? { ...item, packed: !item.packed } : item));

          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({ ...item, packed: true }));
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => ({ ...item, packed: false }));
          return { items: newItems };
        });
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
    }),
    {
      name: "items",
    }
  )
);
