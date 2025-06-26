import { MainDescription } from "../Components/MainDescription";
import { Plan } from "../Components/Plans/Plan";
import { descriptions, plans } from "../data/textos.json";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import "../Styles/Plans/Plan.css";
import { Selection } from "../Components/Plans/Selection";

export const Plans = () => {
  return (
    <>
      <MainDescription
        title={descriptions.plan.title}
        description={descriptions.plan.description}
      />
      <section className="plan_container">
        <Plan title={plans[0].title} price={plans[0].price} src={arcade} />
        <Plan title={plans[1].title} price={plans[1].price} src={advanced} />
        <Plan title={plans[2].title} price={plans[2].price} src={pro} />
      </section>

      <Selection />
    </>
  );
};
