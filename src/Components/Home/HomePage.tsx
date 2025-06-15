import { useRef } from "react";
import { HomeFooter } from "./HomeFooter";
import { HomeMain } from "./HomeMain";
import { NavBar } from "./NavBar";

export const HomePage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handlerExternalSubmit = () => {
    formRef.current?.submit();
  };

  return (
    <>
      {/* Nav Barr */}
      <NavBar></NavBar>

      {/* Title and description */}
      <HomeMain formRef={formRef}></HomeMain>

      {/* Footer */}
      <HomeFooter
        backButtonIsNotRequired
        handlerExternalSubmit={handlerExternalSubmit}
      ></HomeFooter>
    </>
  );
};
