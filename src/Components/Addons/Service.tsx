import { useContext, useState, type ReactElement, type ReactNode } from "react";
import "../../Styles/Addons/Service.css";
import { ReviewContext } from "../../Context/ReviewContext";

interface props {
  title: string;
  description: string;
  price: string;
}

export const Service: React.FC<props> = ({ title, description, price }) => {
  const [isChecked, setIsChecked] = useState(Boolean);
  const { setReview, review } = useContext(ReviewContext)! as {
    setReview: (value: object) => void;
    review: object;
  };

  const reviewService = {
    price,
    title,
  };

  const checked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;

    setIsChecked(value);
  };

  const active_checkbox = (e?: React.MouseEvent<HTMLLabelElement>) => {
    if (!isChecked) return "service";

    console.log(e);

    return "service active_checkbox";
  };

  return (
    <label className={active_checkbox()} onClick={(e) => active_checkbox(e)}>
      <input
        type="checkbox"
        name="checkbox"
        className="checkbox"
        onChange={(e) => checked(e)}
      />

      <section className="text_container">
        <h3 className="title"> {title} </h3>

        <p className="description"> {description} </p>
      </section>

      <p className="price"> {price} </p>
    </label>
  );
};
