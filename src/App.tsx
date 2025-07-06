// IMportamos los componentes de la UI principal, los que nunca cambiaran, el nav y el footer de mi carpeta Components
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

// El principal main es especial porque si cambiara su contenido interior, y tambien lo importamos de Components
import { PrincipalMain } from "./Components/PrincipalMain";

// Y por ultimo importamos el provider, es una herramienta que viene de el useContext, es el que proveee el contexto general de mi web, en este caso provee si es mensual o anual la configuracion, y lo importamos de Context
import { TextContextProvider } from "./Context/TextContext";

export const App = () => {
  return (
    <>
      {/* Renderizamos la UI */}
      <NavBar></NavBar>

      {/* Le pasamos el provider a el main, que es donde se ejecutara el contexto global, en otras circunstancias seria el App, pero aqui nadamas cambia el main */}
      <TextContextProvider>
        <PrincipalMain></PrincipalMain>
      </TextContextProvider>

      {/* Renderizamos la UI */}
      <Footer></Footer>
    </>
  );
};
