import { Footer } from "../Footer";
import { Main } from "./Main";
import { NavBar } from "./NavBar";
import "../../Styles/GeneralStyles.css";

export const HomePage = () => {
  return (
    <>
      {/* Nav Barr */}
      <NavBar></NavBar>

      {/* Title ,description and form */}
      <Main></Main>

      {/* Next Button */}
      <Footer notBackButton={true}></Footer>
    </>
  );
};
