import { FormReview } from "../Components/Finishing/FormReview";
import { MainDescription } from "../Components/MainDescription";
import { descriptions } from "../data/textos.json";

export const Finishing = () => {
  return (
    <>
      <MainDescription
        title={descriptions.finishing.title}
        description={descriptions.finishing.description}
      ></MainDescription>

      <FormReview></FormReview>
    </>
  );
};
