import "./../Styles/Home/MainDescription.css";

interface Props {
  title: string;
  description: string;
}

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
