import React from "react";
import Box from "@mui/material/Box";
import { SideMenu } from "./components/SideMenu";
import { Table } from "./components/Table";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { LeadsContextProvider } from "./context/LeadsContextProvider";

export const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <LeadsContextProvider>
      <Box sx={{ display: "flex" }}>
        <Header handleDrawerOpen={handleDrawerOpen} open={open} />
        <SideMenu handleDrawerClose={handleDrawerClose} open={open} />
        <MainContent open={open}>
          <Table />
        </MainContent>
      </Box>
    </LeadsContextProvider>
  );
};
