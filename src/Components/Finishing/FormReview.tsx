import { ReviewDescription } from "./ReviewDescription";
import { ReviewTotal } from "./ReviewTotal";
import "../../Styles/Finishing/FormReview.css";

export const FormReview = () => {
  return (
    <section className="review_container">
      <ReviewDescription></ReviewDescription>

      <ReviewTotal></ReviewTotal>
    </section>
  );
};
