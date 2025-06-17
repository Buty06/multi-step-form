import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export const NavBar = () => {
  return (
    <aside className="aside">
      <ol className="aside_list">
        <li>
          <Link to="/" className="aside_links">
            1
          </Link>
        </li>
        <li>
          <Link to="/plans" className="aside_links">
            2
          </Link>
        </li>
        <li>
          <Link to="/addons" className="aside_links">
            3
          </Link>
        </li>
        <li>
          <Link to="/finishing" className="aside_links">
            4
          </Link>
        </li>
      </ol>
    </aside>
  );
};
