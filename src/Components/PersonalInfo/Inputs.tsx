// IMportamos los estilos principales de los inputs
import "../../Styles/PersonalInfo/Inputs.css";

// definimos los tipos de las props, en este caso todas son strings
interface Props {
  labelValue: string;
  placeholderValue: string;
  type: string;
}

// incluimos las props
export const Inputs: React.FC<Props> = ({
  labelValue,
  placeholderValue,
  type,
}) => {
  return (
    <>
      <label className="main_label">
        {labelValue}
        <input
          type={type}
          placeholder={placeholderValue}
          required
          className="main_input"
        />
      </label>
    </>
  );
};
