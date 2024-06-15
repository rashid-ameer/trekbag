import useItemsContext from "../hooks/useItemsContext";
import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  const { items } = useItemsContext();

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
