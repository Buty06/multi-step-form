import { useRef } from "react";
import { Footer } from "./Components/Home/Footer";
import { Main } from "./Components/Home/Main";
import { NavBar } from "./Components/NavBar";
import { Plans } from "./Components/Page/Plans";
import "./Styles/GeneralStyles.css";
import { Route, Routes } from "react-router-dom";
import { Addons } from "./Components/Page/Addons";
import { Finishing } from "./Components/Page/Finishing";

export const HomePage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handlerExternalSubmit = () => {
    formRef.current?.submit();
  };

  return (
    <>
      {/* Nav Barr */}
      <NavBar></NavBar>

      <Routes>
        <Route path="/home/*" element={<HomePage></HomePage>}></Route>
        <Route path="/plans" element={<Plans></Plans>}></Route>
        <Route path="/addons" element={<Addons></Addons>}></Route>
        <Route path="/finishing" element={<Finishing></Finishing>}></Route>
      </Routes>

      {/* Title and description */}
      <Main formRef={formRef}></Main>

      {/* Footer */}
      <Footer
        backButtonIsNotRequired
        handlerExternalSubmit={handlerExternalSubmit}
      ></Footer>
    </>
  );
};
