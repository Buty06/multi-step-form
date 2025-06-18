import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="multi-step-form">
      {/*basename es para poner la ruta basica en la que se alejora mi proyecto */}
      <App></App>
    </BrowserRouter>
  </StrictMode>
);
