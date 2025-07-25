import { useContext } from "react";
import { ReviewContext } from "../../Context/ReviewContext";
import { Link } from "react-router-dom";
import "../../Styles/Finishing/ReviewDescription.css";

interface planType {
  title: string;
  price: string;
}

let price: string | undefined;
let title: string | undefined;
let outsideRest: planType[] = [];

export const ReviewDescription = () => {
  const { review } = useContext(ReviewContext) as { review: object };
  let isReviewVoid = false;

  if (!Object.values(review).length) {
    isReviewVoid = true;
  } else {
    const [plan, ...rest] = Object.values(review);

    outsideRest = [...rest];
    price = plan.price;
    title = plan.title;
  }

  return (
    <article className="review_description_container">
      {isReviewVoid ? (
        <section>
          <h2>You must select a plan</h2>

          <Link to="/plans"> PLans </Link>
        </section>
      ) : (
        <>
          <section className="review_description_plan">
            <div>
              <h2>{title}</h2>

              <Link className="review_plan_change" to="/plans">
                {" "}
                Change
              </Link>
            </div>

            <p className="review_plan_price"> {price} </p>
          </section>

          {outsideRest.map((element: planType, index) => (
            <section key={index} className="review_description_service">
              <h3 className="review_service_title">{element.title}</h3>
              <p>{element.price}</p>
            </section>
          ))}
        </>
      )}
    </article>
  );
};
