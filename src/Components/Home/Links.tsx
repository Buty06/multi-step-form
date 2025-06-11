// !Cuando pongas una properti tienes que ponerle el tipo de dato a esa props
interface Props {
  value: number;
}

export const Links: React.FC<Props> = ({ value }) => {
  return (
    <a href="#">
      <li> {value} </li>
    </a>
  );
};
