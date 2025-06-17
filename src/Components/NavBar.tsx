import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

export const NavBar = () => {
  return (
    <aside className="aside">
      {/*Links that connect to different pages, thi links are components to*/}
      <ol className="aside_list">
        <Link to={"/home"} className="aside_links">
          1
        </Link>
        <Link to={"/plans"} className="aside_links">
          2
        </Link>
        <Link to={"/addons"} className="aside_links">
          3
        </Link>
        <Link to={"/finishing"} className="aside_links">
          4
        </Link>
      </ol>
    </aside>
  );
};
