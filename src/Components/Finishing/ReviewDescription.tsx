import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import { Link } from "react-router-dom";

interface planType {
  title: string;
  price: string;
}

let price: string | undefined;
let title: string | undefined;
let rest: planType[] = [];

export const ReviewDescription = () => {
  const { review } = useContext(ReviewContext) as { review: object };
  let isReviewVoid = false;

  if (!Object.values(review).length) {
    isReviewVoid = true;
  } else {
    const [plan, ...rest] = Object.values(review);
    // const { price, title } = plan as planType;

    price = plan.price;
    title = plan.title;
  }

  return (
    <article>
      {isReviewVoid ? (
        <h2>Holaaaaa</h2>
      ) : (
        <>
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
        </>
      )}
    </article>
  );
};
