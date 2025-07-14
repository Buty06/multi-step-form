import { useContext } from "react";
import { TextContext } from "../../Context/TextContext";
import { Calculation } from "./Calculation";
import { planes } from "../../data/textos.json";

type Period = "month" | "year";

export const ReviewTotal = () => {
  const { jsonDecision } = useContext(TextContext)! as { jsonDecision: Period };

  const title = planes[jsonDecision].finishing.title;

  const total = Calculation();

  return (
    <section>
      <h2> {title} </h2>
      <p> {total} </p>
    </section>
  );
};
