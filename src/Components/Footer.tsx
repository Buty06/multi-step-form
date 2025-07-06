import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

const steps = ["/", "/plans", "/addons", "/finishing"];

export const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const currentIndex = steps.indexOf(pathname);

  const nextStep = () => {
    currentIndex < steps.length - 1 && navigate(steps[currentIndex + 1]);
  };

  const backStep = () => {
    navigate(steps[currentIndex - 1]);
  };

  return (
    <footer className="footer">
      {/* Next Button */}

      <button onClick={nextStep} className="footer_next_button">
        Next Step
      </button>

      {!(pathname === "/") && (
        <button onClick={backStep} className="footer_back_button">
          Go Back
        </button>
      )}
    </footer>
  );
};
