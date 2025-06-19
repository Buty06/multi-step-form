import { Link, useLocation } from "react-router-dom";
import "../Styles/NavBar.css";

export const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="aside">
      <ol className="aside_list">
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
