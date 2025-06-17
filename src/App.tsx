import { Route, Routes } from "react-router-dom";
import { Layout } from "./Components/Layout";
import { Plans } from "./Page/Plans";
import { PersonalInfo } from "./Page/PersonalInfo";
import { Addons } from "./Page/Addons";
import { Finishing } from "./Page/Finishing";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route
          path="/info"
          index
          element={<PersonalInfo></PersonalInfo>}
        ></Route>
        <Route path="/plans" element={<Plans></Plans>}></Route>
        <Route path="/addons" element={<Addons></Addons>}></Route>
        <Route path="/finishing" element={<Finishing></Finishing>}></Route>
      </Route>
    </Routes>
  );
};
