import useItemsContext from "../hooks/useItemsContext";
import Button from "./Button";

function ButtonGroup() {
  const { handleMarkAllAsComplete, handleMarksAllAsIncomplete, handleResetToInitial, handleRemoveAllItems } =
    useItemsContext();

  return (
    <section className="button-group">
      <Button
        onClick={handleMarkAllAsComplete}
        buttonType="secondary"
        text="Mark all as complete"
      />
      <Button
        onClick={handleMarksAllAsIncomplete}
        buttonType="secondary"
        text="Mark all as incomplete"
      />
      <Button
        onClick={handleResetToInitial}
        buttonType="secondary"
        text="Reset to initial"
      />
      <Button
        onClick={handleRemoveAllItems}
        buttonType="secondary"
        text="Remove all items"
      />
    </section>
  );
}
export default ButtonGroup;
