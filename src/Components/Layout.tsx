import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <NavBar></NavBar>

      <main>
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </>
  );
};
