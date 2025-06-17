import "../../Styles/Home/Footer.css";

interface Props {
  backButtonIsNotRequired?: boolean;
  handlerExternalSubmit: (event: React.FormEvent) => void;
}

export const Footer: React.FC<Props> = ({
  backButtonIsNotRequired,
  handlerExternalSubmit,
}) => {
  return (
    <footer className="footer">
      {/* Next Button */}

      {!backButtonIsNotRequired && <button>Go Back</button>}

      <button onClick={handlerExternalSubmit} className="footer_next_button">
        Next Step
      </button>
    </footer>
  );
};
