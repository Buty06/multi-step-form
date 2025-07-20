import { createContext, useState, type ReactNode } from "react";

type ValidationContextType = {
  disabled: boolean;
  setDisabled: (valor: boolean) => void;
};

export const ValidationContext = createContext<
  ValidationContextType | undefined
>(undefined);

export const ValidationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <ValidationContext.Provider value={{ disabled, setDisabled }}>
      {children}
    </ValidationContext.Provider>
  );
};
