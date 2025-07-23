// IMportamos los estilos principales de los inputs
import { useContext, useState } from "react";
import "../../Styles/PersonalInfo/Inputs.css";
import { ValidationContext } from "../../Context/ValidationContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

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
  const [messageError, setmessageError] = useState("");
  const { setDisabled } = useContext(ValidationContext)!;
  const [value, setValue] = useLocalStorage(type, "");

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    switch (type) {
      case "text":
        if (!/(?:.*[a-zA-Z]){4,}/.test(inputValue)) {
          setmessageError("You need to enter at least 4 letters");
          setDisabled(true);
        } else {
          setmessageError("");
          setDisabled(false);
        }
        break;

      case "email":
        if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputValue)
        ) {
          setmessageError("You need to enter a valid email address");
          setDisabled(true);
        } else {
          setmessageError("");
          setDisabled(false);
        }
        break;

      case "tel":
        if (!/^\+\d{1,3}\d{7,14}$/.test(inputValue)) {
          setmessageError("You need to enter a valid phone number");
          setDisabled(true);
        } else {
          setmessageError("");
          setDisabled(false);
        }
        break;

      default:
        break;
    }

    setValue(inputValue);
  };

  return (
    <>
      <label className="main_label">
        {labelValue}
        <input
          type={type}
          placeholder={placeholderValue}
          required
          className="main_input"
          onChange={(e) => onInputChange(e)}
          value={value}
        />

        <p className="message_error">{messageError}</p>
      </label>
    </>
  );
};
