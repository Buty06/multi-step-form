// Importamos el Link, el componente personal de react-router, el ayuda a cambiar de pagina a pagina, lo traemos desde su lib, y el useLocation que es un hoock de la libreria el cual nos ayuda en sabes en que parte de la ruta estamos
import { Link, useLocation } from "react-router-dom";

// Importamos los estilos generales del navBar de Styles
import "../Styles/NavBar.css";

export const NavBar = () => {
  // Recogemos el pathname de el hoock, el cual nos dice en que parte del path estamos en tiempo real, esto nos ayuda al modo active de la pagina
  const { pathname } = useLocation();

  return (
    <aside className="aside">
      <ol className="aside_list">
        {/* A los links les pasamos la propiedad to= que define la ruta ya preeEcha de donde aparece mi componente, ruta la cual se definio en la carpeta Routes, y utilizamos el pathname para hacer una condicional dandole la clase active, que le da un color caracterisitco */}
        <Link to="/" className="aside_links">
          <li
            className={
              pathname === "/" ? "aside_list_items active" : "aside_list_items"
            }
          >
            1
          </li>
        </Link>

        <Link to="/plans" className="aside_links">
          <li
            className={
              pathname === "/plans"
                ? "aside_list_items active"
                : "aside_list_items"
            }
          >
            2
          </li>
        </Link>

        <Link to="/addons" className="aside_links">
          <li
            className={
              pathname === "/addons"
                ? "aside_list_items active"
                : "aside_list_items"
            }
          >
            3
          </li>
        </Link>

        <Link to="/finishing" className="aside_links">
          <li
            className={
              pathname === "/finishing"
                ? "aside_list_items active"
                : "aside_list_items"
            }
          >
            4
          </li>
        </Link>
      </ol>
    </aside>
  );
};
