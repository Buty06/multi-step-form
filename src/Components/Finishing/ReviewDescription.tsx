import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import { Link } from "react-router-dom";

interface planType {
  title: string;
  price: string;
}

export const ReviewDescription = () => {
  const { review } = useContext(ReviewContext)! as { review: object };

  if (!Object.values(review)[0]) return;

  const { price, title } = Object.values(review)[0] as planType;

  return (
    <article>
      <section>
        <div className="">
          <h2>{title}</h2>

          <Link to="/plans"> Change</Link>
        </div>

        <p> {price} </p>
      </section>
    </article>
  );
};
