import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import { Container } from "react-bootstrap";
import "./index.scss";

const SelectFilms = () => {
  return (
    <Container style={{ border: "1px solid red" }}>
      <MainView />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<SelectFilms />);
