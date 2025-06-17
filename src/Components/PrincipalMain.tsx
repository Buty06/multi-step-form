import { MainDescription } from "./Home/MainDescription";
import { MainForm } from "./Home/MainForm";
import "../../Styles/Home/Main.css";

interface Props {
  formRef?: React.RefObject<HTMLFormElement | null>;
}

export const PrincipalMain: React.FC<Props> = ({ formRef }) => {
  return (
    <main className="main">
      {/* Description */}
      <MainDescription></MainDescription>

      {/* Form */}
      <MainForm formRef={formRef}></MainForm>
    </main>
  );
};
