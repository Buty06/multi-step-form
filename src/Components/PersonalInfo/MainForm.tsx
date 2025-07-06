// Importamos los inputs, componente UI
import { Inputs } from "./Inputs";

// Importamos los estilos principales de PersonalInfo
import "../../Styles/PersonalInfo/MainForm.css";

export const MainForm: React.FC = () => {
  return (
    <form className="main_form">
      {/* Les pasamos las propiedades para la estructuracion del input */}
      <Inputs
        labelValue="Name"
        placeholderValue="e.g. Stephen King"
        type="text"
      ></Inputs>

      <Inputs
        labelValue="Email Address"
        placeholderValue="e.g. stephenking@lorem.com"
        type="email"
      ></Inputs>

      <Inputs
        labelValue="Phone Number"
        placeholderValue="e.g. +1 234 567 890"
        type="tel"
      ></Inputs>
    </form>
  );
};
