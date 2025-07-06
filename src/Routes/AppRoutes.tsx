// Importamos los Routes y Route de la libreria react-router, para definir las rutas con los componentes
import { Route, Routes } from "react-router-dom";

// Importamos todas las rutas, osea todas las paginas componentes, de la carpeta Page
import { PersonalInfo } from "../Page/PersonalInfo";
import { Plans } from "../Page/Plans";
import { Addons } from "../Page/Addons";
import { Finishing } from "../Page/Finishing";

export const AppRoutes = () => {
  return (
    // Componente principal de las rutas, este envuelve todas tus rutas
    <Routes>
      {/* Definimos todas las rutas XD */}

      {/* Definimos el componente principal del proyecto, al iniciar la pagina esta llegara aqui primero */}
      <Route index element={<PersonalInfo />}></Route>

      {/* Les pasamos las propiedades path (seria lo mismo que en el pathname de los Links, solo que alla se pone un / al inicio para coorelacionarce con el basename) y la propiedad element, que te dice que elemento se va a renderizar */}
      <Route path="plans" element={<Plans />}></Route>
      <Route path="addons" element={<Addons />}></Route>
      <Route path="finishing" element={<Finishing />}></Route>

      {/* Ruta por defecto si la ponen mal */}
      <Route path="/*" element={<PersonalInfo />}></Route>
    </Routes>
  );
};
