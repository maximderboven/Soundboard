import { ReactElement } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import SettingsContext from "./SettingsContext";

interface IWithChildren {
  children: ReactElement | ReactElement[];
}

export default function SettingsContextProvider({ children }: IWithChildren) {
  const [showNames, setShowNames] = useLocalStorage("show-names");

  const toggleShowNames = () => setShowNames(!showNames);

  return (
    <SettingsContext.Provider value={{ showNames, toggleShowNames }}>
      {children}
    </SettingsContext.Provider>
  );
}
