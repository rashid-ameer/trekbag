import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export default function useItemsContext() {
  const state = useContext(ItemsContext);

  if (!state) {
    throw new Error("useItemsContext must be used within a ItemsContextProvider");
  }

  return state;
}
