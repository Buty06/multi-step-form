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

  const [plan, ...rest] = Object.values(review);
  const { price, title } = plan as planType;

  console.log(review.length);

  return (
    <article>
      <section>
        <div className="">
          <h2>{title}</h2>

          <Link to="/plans"> Change</Link>
        </div>

        <p> {price} </p>
      </section>

      {rest.map((element: planType, index) => (
        <section key={index}>
          <h3>{element.price}</h3>
          <p>{element.title}</p>
        </section>
      ))}
    </article>
  );
};
