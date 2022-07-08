import { Container } from "./AppStyle";
import { Aside } from "./Components/Aside";
import { Header } from "./Components/Header";
import { Main } from "./Components/Main";

function App() {
  return (
    <Container>
      <Header />
      <div className="main">
        <Aside />
        <Main />
      </div>
    </Container>
  );
}

export default App;
