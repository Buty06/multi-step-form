import { useContext } from "react";
import { TextContext } from "../../Context/TextContext";
import { Calculation } from "./Calculation";
import { planes } from "../../data/textos.json";
import { ReviewContext } from "../../Context/ReviewContext";
import "../../Styles/Finishing/ReviewTotal.css";

type Period = "month" | "year";

export const ReviewTotal = () => {
  const { jsonDecision } = useContext(TextContext)! as { jsonDecision: Period };
  const { review } = useContext(ReviewContext) as { review: object };

  const title = planes[jsonDecision].finishing.title;
  const total = Calculation();

  if (!Object.values(review).length) return;

  return (
    <section className="review_total_container">
      <h2 className="review_total_title"> {title} </h2>
      <p className="review_total_price"> {total} </p>
    </section>
  );
};
