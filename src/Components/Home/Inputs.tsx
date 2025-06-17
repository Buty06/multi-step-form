import "../../Styles/Home/Inputs.css";

interface Props {
  labelValue: string;
  placeholderValue: string;
  type: string;
}

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
