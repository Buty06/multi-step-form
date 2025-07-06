import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// Importamos el BrowserRouter para configurar mis rutas en el react-router-dom, esto envuelve toda mi aplicacion en las rutas de mi proyecto
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*basename es para poner la ruta basica en la que se alojara mi proyecto, esta se pone en el vite.config.ts, es una condicion necesaria */}
    <BrowserRouter basename="multi-step-form">
      {/* Mi aplicacion principal */}
      <App></App>
    </BrowserRouter>
  </StrictMode>
);
