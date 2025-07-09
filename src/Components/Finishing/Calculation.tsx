import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";

export const Calculation = () => {
  const { review } = useContext(ReviewContext)! as {
    // setReview : (value:object) => void
    review: object;
  };

  let total = 0;

  Object.values(review).forEach((value) => {
    const price: string = value.price;
    const strNumbers: string[] | null = price.match(/\d+/g);

    if (!strNumbers) return;

    const number: number = Number(strNumbers[0]);

    total += number;
  });

  console.log(total);
};
