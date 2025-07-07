import { useState } from "react";
import "../../Styles/Addons/Service.css";

interface props {
  title: string;
  description: string;
  price: string;
}

export const Service: React.FC<props> = ({ title, description, price }) => {
  const [isChecked, setIsChecked] = useState(Boolean);

  const checked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;

    setIsChecked(value);
  };

  const active_checkbox = () => {
    if (!isChecked) return "service";

    return "service active_checkbox";
  };

  return (
    <article className={active_checkbox()}>
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
    </article>
  );
};
