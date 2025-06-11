import { useRef } from "react";
import { HomeMainDescription } from "./HomeMainDescription";
import { HomeMainForm } from "./HomeMainForm";

export const HomeMain = () => {
  const formRef = useRef<HTMLFormElement>(null);

  if (formRef.current) {
    console.log(formRef.current);
  }

  return (
    <main>
      {/* Description */}
      <HomeMainDescription></HomeMainDescription>

      {/* Form */}
      <HomeMainForm ref={formRef}> </HomeMainForm>
    </main>
  );
};
