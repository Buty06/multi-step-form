//importamos create context y useState para manejar el contexto global
import { useState, createContext, type ReactNode } from "react";

type TextContextType = {
  jsonDecision: string;
  setJsonDecision: (valor: string) => void;
};

export const TextContext = createContext<TextContextType | undefined>(
  undefined
);

export const TextContextProvider = ({ children }: { children: ReactNode }) => {
  const [jsonDecision, setJsonDecision] = useState("month");

  return (
    <TextContext.Provider value={{ jsonDecision, setJsonDecision }}>
      {children}
    </TextContext.Provider>
  );
};
