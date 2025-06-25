interface Props {
  title: string;
  price: string;
  src: string;
}

export const Plan: React.FC<Props> = ({ title, price, src }) => {
  return (
    <article>
      <img src={src} alt="Icon" />

      <section>
        <h2> {title} </h2>
        <p> {price} </p>
      </section>
    </article>
  );
};
