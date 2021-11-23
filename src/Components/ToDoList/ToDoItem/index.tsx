import { useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import deleteIcon from "../../../assets/icons/ic-delete.png";

import { ButtonItem, Item, SpanItem } from "./styles";

interface ToDoItemProps {
  item: string;
  handleDeleteFromToDo: (itemToDelete: string) => void;
}

export function ToDoItem({ item, handleDeleteFromToDo }: ToDoItemProps) {
  const controls = useAnimation();
  const variants: Variants = {
    start: () => ({
      y: [-10, 0],
      opacity: [0, 1],
      transition: {
        delay: 0.2,
        repeat: 0,
        duration: 0.5,
      },
    }),
    delete: () => ({
      y: [0, 10],
      opacity: [1, 0],
      transition: {
        delay: 0.2,
        repeat: 0,
        duration: 0.5,
      },
    }),
  };

  useEffect(() => {
    controls.start("start");
  }, [controls]);

  async function handleAnimateBeforeDelete(item: string) {
    await controls.start("delete");
    handleDeleteFromToDo(item);
  }

  return (
    <Item animate={controls} variants={variants}>
      <SpanItem>{item}</SpanItem>
      <ButtonItem onClick={() => handleAnimateBeforeDelete(item)}>
        <img src={deleteIcon} alt="ícone lixeira" />
      </ButtonItem>
    </Item>
  );
}
