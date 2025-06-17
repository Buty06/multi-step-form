import { Inputs } from "./Inputs";
import "../../Styles/Home/MainForm.css";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

export const MainForm: React.FC<Props> = ({ formRef }) => {
  return (
    <form ref={formRef} className="main_form">
      {/* Inputs Components */}
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
