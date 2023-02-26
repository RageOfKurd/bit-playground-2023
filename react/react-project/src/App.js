import "./App.css";
import Background from "./components/background/Background";
import Container from "./components/container/Container";

import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1>hello</h1>
        <Background color="red">
          <h1>Hello Red</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            reprehenderit ipsum quo eos incidunt doloremque sunt, excepturi,
            molestiae facilis doloribus labore repellat tempore voluptate nihil!
            Quas dolorem aliquam commodi ea?
          </p>
        </Background>
        <Background color="green">
          <h1>Hello green</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            reprehenderit ipsum quo eos incidunt doloremque sunt, excepturi,
            molestiae facilis doloribus labore repellat tempore voluptate nihil!
            Quas dolorem aliquam commodi ea?
          </p>
        </Background>
      </Container>
    </>
  );
}

export default App;
