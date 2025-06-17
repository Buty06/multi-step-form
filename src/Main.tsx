import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./HomePage";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <HomePage></HomePage>
    </BrowserRouter>
  </StrictMode>
);
