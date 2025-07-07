import "../../Styles/Addons/Service.css";

interface props {
  title: string;
  description: string;
  price: string;
}

export const Service: React.FC<props> = ({ title, description, price }) => {
  return (
    <article className="service">
      <input type="checkbox" name="checkbox" className="checkbox" />

      <section className="text_container">
        <h3 className="title"> {title} </h3>

        <p className="description"> {description} </p>
      </section>

      <p className="price"> {price} </p>
    </article>
  );
};
