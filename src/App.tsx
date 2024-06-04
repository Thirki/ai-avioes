import React from "react";
import Box from "@mui/material/Box";
import { LeadsContextProvider } from "./context/LeadsContextProvider";
import { makeServer } from "./api";
import { queryClient } from "./lib";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header, MainContent, SideMenu, Table } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <LeadsContextProvider>
        <Box sx={{ display: "flex" }}>
          <Header handleDrawerOpen={handleDrawerOpen} open={open} />
          <SideMenu handleDrawerClose={handleDrawerClose} open={open} />
          <MainContent open={open}>
            <Table />
          </MainContent>
        </Box>
      </LeadsContextProvider>
    </QueryClientProvider>
  );
};
