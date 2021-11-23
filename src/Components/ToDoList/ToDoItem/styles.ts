import styled from "styled-components";

import { motion } from "framer-motion";

export const Item = styled(motion.div)`
  display: flex;
  width: 352px;
  height: 32px;
  justify-content: space-between;
  background: #eeeeee;
  padding: 8px 16px;
  margin-bottom: 8px;
`;

export const SpanItem = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #606060;
`;

export const ButtonItem = styled.button`
  border: none;
  cursor: pointer;
  font-size: 0;
  transition: 0.2s filter;
  &:hover {
    filter: brightness(0.9);
  }
`;
