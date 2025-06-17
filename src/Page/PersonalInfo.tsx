import { useRef } from "react";
import { Footer } from "../Components/Footer";
import { PrincipalMain } from "../Components/PrincipalMain";
import { NavBar } from "../Components/NavBar";
import "../Styles/GeneralStyles.css";

export const PersonalInfo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handlerExternalSubmit = () => {
    formRef.current?.submit();
  };

  return (
    <>
      {/* Nav Barr */}
      <NavBar></NavBar>

      {/* Title and description */}
      <PrincipalMain formRef={formRef}></PrincipalMain>

      {/* Footer */}
      <Footer
        backButtonIsNotRequired
        handlerExternalSubmit={handlerExternalSubmit}
      ></Footer>
    </>
  );
};
