// Importamos los estilos principales de mi MainDescription de la carpeta PersonalInfo en Styles
import "../Styles/MainDescription.css";

// Definimos los tipos en las propertys donde le decimos que son string
interface Props {
  title: string;
  description: string;
}

// Les pasamos las props al componente funcional
export const MainDescription: React.FC<Props> = ({ title, description }) => {
  return (
    <header className="main_header">
      {/* Title */}
      <h1 className="main_title"> {title} </h1>

      {/* Description */}
      <p className="main_description">{description}</p>
    </header>
  );
};
