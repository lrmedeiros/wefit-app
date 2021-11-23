import { useState } from "react";

import { useAnimation } from "framer-motion";

import { AddInput, ButtonAddToDo, ToDoInputContainer } from "./styles";

import addIcon from "../../../assets/icons/ic-add.png";

interface ToDoInputProps {
  handleAddToDo: (item: string) => [boolean, string];
}

export function ToDoInput({ handleAddToDo }: ToDoInputProps) {
  const [item, setItem] = useState("");
  const [placeholderAddButton, setPlaceholderAddButton] = useState("Digite");

  const controls = useAnimation();

  const variants = {
    start: (i: number) => ({
      rotate: i % 2 === 0 ? [-1, 1.3, 0] : [1, -1.4, 0],
      transition: {
        delay: 0,
        repeat: 2,
        duration: 0.2,
      },
    }),
    reset: {
      rotate: 0,
    },
  };

  function errorToAddToDo(item: string) {
    const [allOk, typeError] = handleAddToDo(item);
    setItem("");
    setPlaceholderAddButton("Digite");
    if (allOk) {
      return;
    }

    controls.start("start");

    setPlaceholderAddButton(typeError);
  }

  return (
    <ToDoInputContainer>
      <AddInput
        animate={controls}
        variants={variants}
        placeholder={placeholderAddButton}
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <ButtonAddToDo onClick={() => errorToAddToDo(item)}>
        <img src={addIcon} alt="ícone de adição" />
      </ButtonAddToDo>
    </ToDoInputContainer>
  );
}
