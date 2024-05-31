import React, { useMemo } from "react";
import { LeadsContext } from "./LeadsContext";

interface IMyContextProviderProps {
  children: React.ReactNode;
}

export const LeadsContextProvider: React.FC<IMyContextProviderProps> = ({
  children,
}) => {
  const drawerwidth = 240;

  const value = useMemo(
    () => ({
      drawerwidth,
    }),
    [drawerwidth]
  );

  return (
    <LeadsContext.Provider value={value}>{children}</LeadsContext.Provider>
  );
};
