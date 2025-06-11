import { BackButton } from "./BackButton";

interface Props {
  notBackButton?: boolean; //Esta es una prop opcional, si no la envio o la envio en falso me aparecerá el boton
}

export const Footer: React.FC<Props> = ({ notBackButton }) => {
  return (
    <footer>
      {/* Back button if necessary */}
      {!notBackButton && <BackButton></BackButton>}

      {/* Next Button */}
      <button type="submit">Next Step</button>
    </footer>
  );
};
