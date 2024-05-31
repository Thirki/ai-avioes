import React from "react";
import Box from "@mui/material/Box";
import { SideMenu } from "./components/SideMenu";
import { Table } from "./components/Table";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { LeadsContextProvider } from "./context/LeadsContextProvider";
import { makeServer } from "./api/server";

const hasByPass = true;

export const App: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (import.meta.env.MODE === "development" || hasByPass) {
    const fullUrl = import.meta.url.split("/");
    const formatedUrl = `${fullUrl[0]}//${fullUrl[2]}`;
    makeServer({ environment: formatedUrl });
  }

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
