import { useState } from "react";

import { ToDoBox } from "./ToDoBox";

import { ToDoListContainer } from "./styles";
import { ToDoInput } from "./ToDoInput";

export function ToDoList() {
  const [items, setItems] = useState<string[]>([]);

  function handleAddToDo(item: string): [boolean, string] {
    if (item.trim() === "") {
      return [false, "Input sem valor!"];
    }
    if (items.includes(item)) {
      return [false, "Você já tem uma tarefa igual"];
    }
    setItems([item, ...items]);
    return [true, "ok"];
  }

  function handleDeleteFromToDo(item: string) {
    let newItems = [...items];
    newItems.splice(items.indexOf(item), 1);
    setItems(newItems);
  }

  return (
    <ToDoListContainer>
      <ToDoInput handleAddToDo={handleAddToDo} />
      <ToDoBox items={items} handleDeleteFromToDo={handleDeleteFromToDo} />
    </ToDoListContainer>
  );
}
