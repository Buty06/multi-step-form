interface Props {
  backButtonIsNotRequired?: boolean;
  handlerExternalSubmit: (event: React.FormEvent) => void;
}

export const Footer: React.FC<Props> = ({
  backButtonIsNotRequired,
  handlerExternalSubmit,
}) => {
  return (
    <footer>
      {/* Next Button */}

      {!backButtonIsNotRequired && <button>Go Back</button>}

      <button onClick={handlerExternalSubmit}>Next Step</button>
    </footer>
  );
};
