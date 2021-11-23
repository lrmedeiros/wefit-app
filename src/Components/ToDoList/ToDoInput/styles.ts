import styled from "styled-components";
import { motion } from "framer-motion";

export const ToDoInputContainer = styled.div`
  display: flex;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
`;

export const AddInput = styled(motion.input)`
  width: 288px;
  height: 48px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
  border: none;
  color: #909090;
  padding-top: 14px;
  padding-left: 16px;
  padding-bottom: 15px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const ButtonAddToDo = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #40d9b8;
  border: none;
  font-size: 0;
  cursor: pointer;

  transition: 0.2s filter;
  &:hover {
    filter: brightness(0.9);
  }
`;
