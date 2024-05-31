import { createContext } from "react";

interface ILeadsContextType {
  drawerwidth?: number;
}

export const LeadsContext = createContext<ILeadsContextType>({});
