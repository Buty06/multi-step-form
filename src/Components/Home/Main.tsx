import { MainDescription } from "./MainDescription";
import { MainForm } from "./MainForm";
import "../../Styles/Home/Main.css";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

export const Main: React.FC<Props> = ({ formRef }) => {
  return (
    <main className="main">
      {/* Description */}
      <MainDescription></MainDescription>

      {/* Form */}
      <MainForm formRef={formRef}></MainForm>
    </main>
  );
};
