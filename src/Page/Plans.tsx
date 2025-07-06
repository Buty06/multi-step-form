import { MainDescription } from "../Components/PersonalInfo/MainDescription";
import { Plan } from "../Components/Plans/Plan";
import { descriptions, planes as planes } from "../data/textos.json";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import "../Styles/Plans/Plan.css";
import { Selection } from "../Components/Plans/Selection";
import { useContext } from "react";
import { TextContext } from "../Context/TextContext";

type Period = "month" | "year";

export const Plans = () => {
  const context = useContext(TextContext);

  const { jsonDecision } = context! as { jsonDecision: Period };

  return (
    <>
      <MainDescription
        title={descriptions.plan.title}
        description={descriptions.plan.description}
      />

      <section className="plan_container">
        <Plan
          title={planes[jsonDecision].plan[0].title}
          price={planes[jsonDecision].plan[0].price}
          src={arcade}
        />

        <Plan
          title={planes[jsonDecision].plan[1].title}
          price={planes[jsonDecision].plan[1].price}
          src={advanced}
        />
        <Plan
          title={planes[jsonDecision].plan[2].title}
          price={planes[jsonDecision].plan[2].price}
          src={pro}
        />
      </section>

      <Selection />
    </>
  );
};
