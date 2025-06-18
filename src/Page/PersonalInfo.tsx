import { useRef } from "react";
import { PrincipalMain } from "../Components/PrincipalMain";
import "../Styles/GeneralStyles.css";

export const PersonalInfo = () => {
  const formRef = useRef<HTMLFormElement>(null);

  // const handlerExternalSubmit = () => {
  //   formRef.current?.submit();
  // };

  return (
    <>
      {/* Solo el contenido específico de esta página */}
      <PrincipalMain formRef={formRef} />
      {/* Si necesitas un footer específico con props, considera manejarlo desde Layout o pasar datos vía contexto */}
    </>
  );
};
