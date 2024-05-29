import { createContext } from "react";

interface ILeadsContextType {
  drawerWidth?: number;
}

export const LeadsContext = createContext<ILeadsContextType>({});
