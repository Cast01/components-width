import React, { useContext, useEffect, useRef, useState } from "react";
import { AsideSwitcher } from "../Contexts/AsideSwitcher";
import { Container } from "./MainStyle";

export function Main() {
  const [widthMain, setWidthMain] = useState<number>();

  const { aside } = useContext(AsideSwitcher);

  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidthMain(mainRef.current?.offsetWidth);

    function handleResize() {
      setWidthMain(mainRef.current?.offsetWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [aside]);

  return (
    <Container ref={mainRef}>
      <h1>MAIN</h1>
      <p>
        Quando a tela for redimensionada ou quando o valor do aside mudar, a
        largura do componente vai será atualizada.
      </p>
      <h2>width: {widthMain}</h2>
    </Container>
  );
}
