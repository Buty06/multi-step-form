import { useState } from "react";
import "../../Styles/Plans/Selection.css";

export const Selection = () => {
  const [decision, setDecision] = useState("");

  const getClassName = () => {
    if (!decision) return "selector_ball";

    return decision === "left"
      ? "selector_ball ballMoveToLeft"
      : "selector_ball ballMoveToRigth";
  };

  return (
    <section className="selection">
      <button
        className="selection_btn"
        style={decision === "left" ? { color: "rgb(44, 9, 87)" } : {}}
        onClick={() => setDecision("left")}
      >
        Monthly
      </button>

      <div className="selector">
        <div className={getClassName()}></div>
      </div>

      <button
        className="selection_btn"
        style={decision === "rigth" ? { color: "rgb(44, 9, 87)" } : {}}
        onClick={() => setDecision("rigth")}
      >
        Yearly
      </button>
    </section>
  );
};
