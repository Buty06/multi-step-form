import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import { PrincipalMain } from "./Components/PrincipalMain";
import { TextContextProvider } from "./Context/TextContext";

export const App = () => {
  return (
    <>
      <NavBar></NavBar>

      <TextContextProvider>
        <PrincipalMain></PrincipalMain>
      </TextContextProvider>

      <Footer></Footer>
    </>
  );
};
