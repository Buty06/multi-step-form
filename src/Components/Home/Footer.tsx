interface Props {
  notBackButton?: boolean; //Esta es una prop opcional, si no la envio o la envio en falso me aparecerá el boton
}

export const Footer: React.FC<Props> = ({ notBackButton }) => {
  return (
    <footer>
      {/* Back button if necessary */}
      {!notBackButton && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
          ut, reiciendis minus doloremque hic consequatur corporis totam quis
          corrupti sit, maiores saepe odio iste? Doloribus laborum assumenda
          animi incidunt magnam.
        </p>
      )}

      {/* Next Button */}
      <button type="submit">Next Step</button>
    </footer>
  );
};
