import { Links } from "./Links";

export const HomeNavBar = () => {
  return (
    <aside>
      {/*Links that connect to different pages, thi links are components to*/}
      <ol>
        <Links value={1}></Links>
        <Links value={2}></Links>
        <Links value={3}></Links>
        <Links value={4}></Links>
      </ol>
    </aside>
  );
};
