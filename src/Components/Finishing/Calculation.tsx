import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";

export const Calculation = () => {
  const { review } = useContext(ReviewContext)! as {
    // setReview : (value:object) => void
    review: object;
  };

  console.log(review);

  let total = 0;

  Object.values(review).forEach((value) => {
    console.log(value);
  });
};
