import React from "react";
import { DrawerHeader, Main } from "./styles";

interface IMainContentProps {
  children: React.ReactNode;
  open: boolean;
}

export const MainContent: React.FC<IMainContentProps> = ({
  children,
  open,
}) => {
  return (
    <Main open={open}>
      <DrawerHeader />
      {children}
    </Main>
  );
};
