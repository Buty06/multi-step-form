import { Route, Routes } from "react-router-dom";
import { Plans } from "./Page/Plans";
import { PersonalInfo } from "./Page/PersonalInfo";
import { Addons } from "./Page/Addons";
import { Finishing } from "./Page/Finishing";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <Routes>
        <Route index element={<PersonalInfo />}></Route>
        <Route path="plans" element={<Plans />}></Route>
        <Route path="addons" element={<Addons />}></Route>
        <Route path="finishing" element={<Finishing />}></Route>
      </Routes>

      <Footer></Footer>
    </>
  );
};
