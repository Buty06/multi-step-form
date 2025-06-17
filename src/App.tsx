import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Plans } from "./Page/Plans";
import { PersonalInfo } from "./Page/PersonalInfo";
import { Addons } from "./Page/Addons";
import { Finishing } from "./Page/Finishing";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="plans" element={<Plans />} />
        <Route path="addons" element={<Addons />} />
        <Route path="finishing" element={<Finishing />} />
      </Route>
    </Routes>
  );
};
