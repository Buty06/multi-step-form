import { Calculation } from "./Calculation";
import { ReviewDescription } from "./ReviewDescription";
import { ReviewTotal } from "./ReviewTotal";

export const FormReview = () => {
  Calculation();

  return (
    <section>
      <ReviewDescription></ReviewDescription>

      <ReviewTotal></ReviewTotal>
    </section>
  );
};
