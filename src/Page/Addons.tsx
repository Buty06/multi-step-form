import { useContext } from "react";
import { MainDescription } from "../Components/MainDescription";
import { descriptions, planes } from "../data/textos.json";
import { TextContext } from "../Context/TextContext";
import { Service } from "../Components/Addons/Service";
import "../Styles/Addons/Addons.css";

const { addons } = descriptions;
type Period = "month" | "year";

export const Addons = () => {
  const { jsonDecision } = useContext(TextContext)! as { jsonDecision: Period };

  return (
    <>
      <MainDescription
        title={addons.title}
        description={addons.description}
      ></MainDescription>

      <section className="service_container">
        <Service
          title={planes[jsonDecision].addons[0].title}
          description={planes[jsonDecision].addons[0].description}
          price={planes[jsonDecision].addons[0].price}
        ></Service>

        <Service
          title={planes[jsonDecision].addons[1].title}
          description={planes[jsonDecision].addons[1].description}
          price={planes[jsonDecision].addons[1].price}
        ></Service>

        <Service
          title={planes[jsonDecision].addons[2].title}
          description={planes[jsonDecision].addons[2].description}
          price={planes[jsonDecision].addons[2].price}
        ></Service>
      </section>
    </>
  );
};
