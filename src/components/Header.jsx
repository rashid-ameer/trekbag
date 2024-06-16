import { useItemsStore } from "../store/itemsStore";
import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  const { items } = useItemsStore();

  return (
    <header>
      <Logo />
      <Counter
        totalNoOfItems={items.length}
        noOfPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
export default Header;
