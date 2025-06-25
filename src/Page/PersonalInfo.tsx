import { MainDescription } from "../Components/MainDescription";
import { MainForm } from "../Components/Home/MainForm";
import { descriptions } from "../data/textos.json";
import "../Styles/GeneralStyles.css";

export const PersonalInfo = () => {
  return (
    <>
      <MainDescription
        title={descriptions.personalInfo.title}
        description={descriptions.personalInfo.description}
      ></MainDescription>
      <MainForm></MainForm>
    </>
  );
};
