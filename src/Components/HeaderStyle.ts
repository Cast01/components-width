import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 65px;
  background: coral;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  button {
    position: absolute;
    left: 15px;
    width: 150px;
    height: calc(100% - 30px);
    cursor: pointer;
  }
`;
