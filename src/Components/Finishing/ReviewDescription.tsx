import { useContext, useState } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import { Link } from "react-router-dom";

interface planType {
  title: string;
  price: string;
}

export const ReviewDescription = () => {
  const [isReviewVoid, setIsReviewVoid] = useState<Boolean>(false);
  const { review } = useContext(ReviewContext) as { review: object };

  if (!Object.values(review).length) {
    setIsReviewVoid(true);
  }

  if (!Object.values(review)[0]) return;

  const [plan, ...rest] = Object.values(review);
  const { price, title } = plan as planType;

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

{
  /* <section>
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
      ))} */
}
