interface Props {
  id: string;
  labelValue: string;
  placeholderValue: string;
  type: string;
}

export const HomeImputs: React.FC<Props> = ({
  id,
  labelValue,
  placeholderValue,
  type,
}) => {
  return (
    <>
      <label htmlFor={id}> {labelValue} </label>
      <input type={type} id={id} placeholder={placeholderValue} required />
    </>
  );
};
