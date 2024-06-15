import useItemsContext from "../hooks/useItemsContext";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar() {
  const { handleAddItem } = useItemsContext();

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
}
export default Sidebar;
