import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useLeadsContext } from "../../context/hooks/useLeadsContext";
import { AppBar } from "./styles";

interface IHeaderProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ handleDrawerOpen, open }) => {
  const { drawerwidth } = useLeadsContext();
  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
