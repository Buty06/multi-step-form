import { useContext } from "react";
import { TextContext } from "../../Context/TextContext";
import { Calculation } from "./Calculation";
import { planes } from "../../data/textos.json";
import { ReviewContext } from "../../Context/ReviewContext";

type Period = "month" | "year";

export const ReviewTotal = () => {
  const { jsonDecision } = useContext(TextContext)! as { jsonDecision: Period };
  const { review } = useContext(ReviewContext) as { review: object };

  const title = planes[jsonDecision].finishing.title;
  const total = Calculation();

  if (!Object.values(review).length) return;

  return (
    <section>
      <h2> {title} </h2>
      <p> {total} </p>
    </section>
  );
};
