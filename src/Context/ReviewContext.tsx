import { createContext, useState, type ReactNode } from "react";

type ReviewContextType = {
  review: object;
  setReview: (value: object) => void;
};

export const ReviewContext = createContext<ReviewContextType | false>(false);

export const ReviewContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [review, setReview] = useState({});

  return (
    <ReviewContext.Provider value={{ review, setReview }}>
      {children}
    </ReviewContext.Provider>
  );
};
