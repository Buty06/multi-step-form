import { useRef } from "react";
import { Footer } from "./Components/Home/Footer";
import { Main } from "./Components/Home/Main";
import { NavBar } from "./Components/Home/NavBar";

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
      <Main formRef={formRef}></Main>

      {/* Footer */}
      <Footer
        backButtonIsNotRequired
        handlerExternalSubmit={handlerExternalSubmit}
      ></Footer>
    </>
  );
};
