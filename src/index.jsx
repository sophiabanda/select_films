import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import "./index.scss";

const SelectFilms = () => {
  return <MainView />;
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<SelectFilms />);
