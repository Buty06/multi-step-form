// Importamos las rutas del la carpeta Routes, sirve para que todos los componentes internos obtengan las rutas preeEchas
import { AppRoutes } from "../Routes/AppRoutes";

// Importamos los estilos principales del main
import "../Styles/Main.css";

export const PrincipalMain = () => {
  return (
    <main className="main">
      {/* Aqui renderizamos todas las rutas, las cuales en realidad son componentes que constituyen todas las paginas internas, las rutas en general */}
      <AppRoutes></AppRoutes>
    </main>
  );
};
