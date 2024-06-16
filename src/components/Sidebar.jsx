import { useItemsStore } from "../store/itemsStore";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar() {
  const { addItem } = useItemsStore();

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
export default Sidebar;
