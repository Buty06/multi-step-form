// Importamos el useLocation y el useNavigate, para la parte de los botones y navegar entre las rutas
import { useLocation, useNavigate } from "react-router-dom";

// Importamos los estilos principales XD
import "../Styles/Footer.css";

// Creamos un array com los path de las ruta spara pasarselo a la funcion despues
const steps = ["/", "/plans", "/addons", "/finishing"];

export const Footer: React.FC = () => {
  // Llamamos denuevo al pathname del useLocation()
  const { pathname } = useLocation();

  // Llamamos al navigate del useNavigate()
  const navigate = useNavigate();

  // Obtenemos el index actual de el array de los paths, si coincide con el pathname este te da uno de su index
  const currentIndex = steps.indexOf(pathname);

  // Creamos la funcion nexStep para controlar si el index actual es menor al largo de las rutas - 1 entonces ejecuta la funcion de navigate pasandole el array de paths en el lugar del index actual + 1 para que pase al siguiente index
  const nextStep = () => {
    currentIndex < steps.length - 1 && navigate(steps[currentIndex + 1]);
  };

  // Creamos una funcion backSteps para volver atras con lo mismo, usando navigate le pasamos el path anterior de el array de path
  const backStep = () => {
    navigate(steps[currentIndex - 1]);
  };

  return (
    <footer className="footer">
      {/* Next Button */}
      <button onClick={nextStep} className="footer_next_button">
        Next Step
      </button>

      {/* Ponemos una condicional que diga que si el pathname es igual a / osea el home entonces que no se rendrice el boton de ir atras */}
      {!(pathname === "/") && (
        <button onClick={backStep} className="footer_back_button">
          Go Back
        </button>
      )}
    </footer>
  );
};
