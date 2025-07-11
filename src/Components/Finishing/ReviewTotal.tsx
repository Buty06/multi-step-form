import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";

let numbersArr: string[] = [];
let total: number = 0;

export const ReviewTotal = () => {
  const { review } = useContext(ReviewContext) as { review: object };

  Object.values(review).forEach((value) => {
    numbersArr = [...numbersArr, value.price.match(/\d/g)[0]];
  });

  console.log(numbersArr);

  numbersArr.forEach((value) => {
    total += Number(value);
  });

  console.log(total);

  return (
    <section>
      <h2></h2>
      <p></p>
    </section>
  );
};
