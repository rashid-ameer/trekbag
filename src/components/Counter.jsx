function Counter({ totalNoOfItems, noOfPackedItems }) {
  return (
    <p>
      {" "}
      <b>{noOfPackedItems}</b>/{totalNoOfItems} items packed
    </p>
  );
}
export default Counter;
