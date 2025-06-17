import { Links } from "./Links";
import "../../Styles/Home/NavBar.css";

export const NavBar = () => {
  return (
    <aside className="aside">
      {/*Links that connect to different pages, thi links are components to*/}
      <ol className="aside_list">
        <Links value={1}></Links>
        <Links value={2}></Links>
        <Links value={3}></Links>
        <Links value={4}></Links>
      </ol>
    </aside>
  );
};
