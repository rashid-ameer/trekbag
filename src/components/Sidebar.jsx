import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({
  handleAddItem,
  handleRemoveAllItems,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarksAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarksAllAsIncomplete={handleMarksAllAsIncomplete}
      />
    </div>
  );
}
export default Sidebar;
