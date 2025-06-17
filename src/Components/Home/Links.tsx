// !Cuando pongas una properti tienes que ponerle el tipo de dato a esa props
interface Props {
  value: number;
}

export const Links: React.FC<Props> = ({ value }) => {
  return (
    <a href="#" className="aside_links">
      <li className="aside_list_item"> {value} </li>
    </a>
  );
};
