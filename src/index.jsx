import { createRoot } from "react-dom/client";
import { MainView } from "./components/main-view/main-view";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "./index.scss";

const SelectFilms = () => {
  return (
    <Container fluid>
      <MainView />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<SelectFilms />);
