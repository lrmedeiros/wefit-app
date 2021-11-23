import styled from "styled-components";

export const BoxWithOutElements = styled.div`
  width: 352px;
  height: 280px;
  margin: 24px;
  border: 1px dashed #cccccc;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpanBox = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #606060;
`;

export const BoxWithElements = styled.div`
  width: 352px;
  height: 280px;
  margin: 24px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b3afb3;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b3afb3;
  }
  ::-webkit-scrollbar-track {
    background: #b3afb3;
    border-radius: 0px;
    box-shadow: inset 0px 0px 0px 0px #f0f0f0;
  }
`;
