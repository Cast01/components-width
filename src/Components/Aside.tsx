import React from "react";
import { useContext } from "react";
import { AsideSwitcher } from "../Contexts/AsideSwitcher";
import { Container } from "./AsideStyle";

export function Aside() {
  const { aside } = useContext(AsideSwitcher);

  return (
    <Container aside={aside}>
      <h1>ASIDE</h1>
    </Container>
  );
}
