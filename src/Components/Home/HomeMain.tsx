import { HomeMainDescription } from "./HomeMainDescription";
import { HomeMainForm } from "./HomeMainForm";

interface Props {
  formRef: React.RefObject<HTMLFormElement | null>;
}

export const HomeMain: React.FC<Props> = ({ formRef }) => {
  return (
    <main>
      {/* Description */}
      <HomeMainDescription></HomeMainDescription>

      {/* Form */}
      <HomeMainForm formRef={formRef}></HomeMainForm>
    </main>
  );
};
