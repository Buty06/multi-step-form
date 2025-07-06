// IMportamos los componentes de la UI necesarios para renderizarse
import { MainDescription } from "../Components/MainDescription";
import { Plan } from "../Components/Plans/Plan";
import { Selection } from "../Components/Plans/Selection";

// Importamos los textos de la data, textos importantes we jajjajajaaja
import { descriptions, planes } from "../data/textos.json";

// Importamos el contexto de el compontente TextContext
import { TextContext } from "../Context/TextContext";

// Importamos las imagenes de los assets
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

// Importamos loa estilos principales de la carpeta Plans en Styles
import "../Styles/Plans/Plan.css";

// Importamos el useContext para poder usar el contexto
import { useContext } from "react";

// Definimos el tipo de el contexto
type Period = "month" | "year";

export const Plans = () => {
  // Llamamos al contexto con el hoock y el componente TextContext
  const context = useContext(TextContext);

  // Llamamos a jsonDecision para la decicion de los textos del json, pasandole el tipado anteriromente dicho, para que sepa ts de que son  esos valores los que ingresaremos y el (!) es para decirle a ts que lo voy a hacer por mis webos
  const { jsonDecision } = context! as { jsonDecision: Period };

  return (
    <>
      <MainDescription
        title={descriptions.plan.title}
        description={descriptions.plan.description}
      />

      <section className="plan_container">
        {/* Llamamos al componetne plan y le pasamos la decision de js para saber que texto renderizaremos */}
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
