import React from "react";
import { DrawerHeader, Main } from "./styles";
import { useLeadsContext } from "../../context/hooks/useLeadsContext";

interface IMainContentProps {
  children: React.ReactNode;
  open: boolean;
}

export const MainContent: React.FC<IMainContentProps> = ({
  children,
  open,
}) => {
  const { drawerwidth } = useLeadsContext();
  return (
    <Main open={open} drawerwidth={drawerwidth}>
      <DrawerHeader />
      {children}
    </Main>
  );
};
