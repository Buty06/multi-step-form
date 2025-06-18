import { Route, Routes } from "react-router-dom";
import { Plans } from "../Page/Plans";
import { PersonalInfo } from "../Page/PersonalInfo";
import { Addons } from "../Page/Addons";
import { Finishing } from "../Page/Finishing";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<PersonalInfo />}></Route>
      <Route path="plans" element={<Plans />}></Route>
      <Route path="addons" element={<Addons />}></Route>
      <Route path="finishing" element={<Finishing />}></Route>
      <Route path="/*" element={<PersonalInfo />}></Route>{" "}
      {/* Ruta por defecto si la ponen mal */}
    </Routes>
  );
};
