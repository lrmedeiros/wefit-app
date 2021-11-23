import { ToDoItem } from "../ToDoItem";
import { BoxWithOutElements, BoxWithElements, SpanBox } from "./styles";

interface ToDoBoxProps {
  items: string[];
  handleDeleteFromToDo: (itemToDelete: string) => void;
}

export function ToDoBox({ items, handleDeleteFromToDo }: ToDoBoxProps) {
  if (items.length > 0) {
    return (
      <BoxWithElements>
        {items.map((item) => (
          <ToDoItem
            key={item}
            handleDeleteFromToDo={handleDeleteFromToDo}
            item={item}
          />
        ))}
      </BoxWithElements>
    );
  }
  return (
    <BoxWithOutElements>
      <SpanBox>Nenhum item cadastrado</SpanBox>
    </BoxWithOutElements>
  );
}
