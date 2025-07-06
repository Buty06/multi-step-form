// Definimos los tipados de las props
interface Props {
  title: string;
  price: string;
  src: string;
}

export const Plan: React.FC<Props> = ({ title, price, src }) => {
  return (
    <article className="plan">
      <img src={src} alt="Icon" />

      <section className="plan_section">
        <h2 className="plan_title"> {title} </h2>
        <p> {price} </p>
      </section>
    </article>
  );
};
