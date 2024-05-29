import { useContext } from "react";
import { LeadsContext } from "../LeadsContext";

export const useLeadsContext = () => {
  return useContext(LeadsContext);
};
