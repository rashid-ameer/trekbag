import Counter from "./Counter";
import Logo from "./Logo";

function Header({ totalNoOfItems, noOfPackedItems }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNoOfItems={totalNoOfItems}
        noOfPackedItems={noOfPackedItems}
      />
    </header>
  );
}
export default Header;
