import styled from "styled-components";

interface AsideProps {
  aside: boolean;
}

export const Container = styled.div`
  width: ${({ aside }: AsideProps) => (aside ? "40%" : "20%")};
  height: 100%;
  background: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;
