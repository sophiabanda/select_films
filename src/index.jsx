import { createRoot } from "react-dom";
import "./index.scss";

const SelectFilms = () => {
  return (
    <div className="title-teal">
      <div>Welcome!</div>
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<SelectFilms />);
