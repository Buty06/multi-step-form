// Importamos el useContext para poder utilizar el contextoy el useState
import { useContext, useState } from "react";

// Importamos el contexto de los textos
import { TextContext } from "../../Context/TextContext";

// Importamos los estilos principales de Plans Selection
import "../../Styles/Plans/Selection.css";

export const Selection = () => {
  // Definimos decision y setDecision como estado localde el componente
  const [decision, setDecision] = useState("");

  // Tramemos el setJsonDecision del useContext para la wea de cambiar lostxtoa globalmente
  const { setJsonDecision } = useContext(TextContext)!;

  // definimos getClassName es para definir la clase a la que pertenecemos
  const getClassName = () => {
    // Verificamos si decision existe retornamos la clase por defecto
    if (!decision) return "selector_ball";

    // Retornamos si todo va bien la condicional si es para la isquierda el movimiento o a la derecha
    return decision === "left"
      ? "selector_ball ballMoveToLeft"
      : "selector_ball ballMoveToRigth";
  };

  return (
    <section className="selection">
      {/* En los botones pasamos el setJsonDecision para que cambie si es mensual o anual globalmente */}
      <button
        className="selection_btn"
        style={decision === "left" ? { color: "rgb(44, 9, 87)" } : {}}
        onClick={() => {
          setDecision("left");
          setJsonDecision("month");
        }}
      >
        Monthly
      </button>

      <div className="selector">
        <div className={getClassName()}></div>
      </div>

      <button
        className="selection_btn"
        style={decision === "rigth" ? { color: "rgb(44, 9, 87)" } : {}}
        onClick={() => {
          setDecision("rigth");
          setJsonDecision("year");
        }}
      >
        Yearly
      </button>
    </section>
  );
};
