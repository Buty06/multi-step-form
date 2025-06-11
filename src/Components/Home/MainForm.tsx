import { HomeImputs } from "./FormImputs";

export const MainForm = () => {
  return (
    <form>
      {/* Inputs Components */}
      <HomeImputs
        id="1"
        labelValue="Name"
        placeholderValue="e.g. Stephen King"
        type="text"
      ></HomeImputs>

      <HomeImputs
        id="2"
        labelValue="Email Address"
        placeholderValue="e.g. stephenking@lorem.com"
        type="email"
      ></HomeImputs>

      <HomeImputs
        id="3"
        labelValue="Phone Number"
        placeholderValue="e.g. +1 234 567 890"
        type="tel"
      ></HomeImputs>
    </form>
  );
};
