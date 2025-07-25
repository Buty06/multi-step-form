import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";

// Definimos los tipados de las props
interface Props {
  title: string;
  price: string;
  src: string;
}

export const Plan: React.FC<Props> = ({ title, price, src }) => {
  const { setReview } = useContext(ReviewContext) as {
    setReview: (value: object) => void;
  };

  const reviewPlan = {
    title,
    price,
  };

  const sendPlan = () => {
    setReview({ reviewPlan });
  };

  return (
    <article className="plan" onClick={sendPlan}>
      <img src={src} alt="Icon" />

      <section className="plan_section">
        <h2 className="plan_title"> {title} </h2>
        <p> {price} </p>
      </section>
    </article>
  );
};
