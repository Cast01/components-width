import React, { useContext } from "react";
import { AsideSwitcher } from "../Contexts/AsideSwitcher";
import { Container } from "./HeaderStyle";

export function Header() {
  const { aside, setAside } = useContext(AsideSwitcher);
  console.log(aside);

  return (
    <Container>
      <button onClick={() => setAside(!aside)}>Aside switcher</button>
      <h1>HEADER</h1>
    </Container>
  );
}
