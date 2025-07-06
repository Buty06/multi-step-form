// Importamos los componentes de UI del main para renderizarlos de PersonalInfo
import { MainDescription } from "../Components/PersonalInfo/MainDescription";
import { MainForm } from "../Components/PersonalInfo/MainForm";

// Importamos los textos de mis componentes, osea la data
import { descriptions } from "../data/textos.json";

// Importamos mis estilos principales de PersonalInfo
import "../Styles/PersonalInfo/PersonalInfo.css";

export const PersonalInfo = () => {
  return (
    <>
      {/* Reenderizamos la descripcion pasandole como props el titulo y la descripcion*/}
      <MainDescription
        title={descriptions.personalInfo.title}
        description={descriptions.personalInfo.description}
      ></MainDescription>

      {/* Y llamamos al formulario */}
      <MainForm></MainForm>
    </>
  );
};
