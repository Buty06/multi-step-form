import { HomeInputs } from "./Inputs";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

export const MainForm: React.FC<Props> = ({ formRef }) => {
  return (
    <form ref={formRef}>
      {/* Inputs Components */}
      <HomeInputs
        id="1"
        labelValue="Name"
        placeholderValue="e.g. Stephen King"
        type="text"
      ></HomeInputs>

      <HomeInputs
        id="2"
        labelValue="Email Address"
        placeholderValue="e.g. stephenking@lorem.com"
        type="email"
      ></HomeInputs>

      <HomeInputs
        id="3"
        labelValue="Phone Number"
        placeholderValue="e.g. +1 234 567 890"
        type="tel"
      ></HomeInputs>
    </form>
  );
};
