import React from "react";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { ILeadsDetails } from "../types/tableTypes";

interface IActionButtonsProps {
  leadsDatails: ILeadsDetails;
}

export const ActionButtons: React.FC<IActionButtonsProps> = ({
  leadsDatails,
}) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(leadsDatails));
    // @TODO: add sucess alert
  };

  return (
    <div>
      <IconButton aria-label="delete">
        <RefreshIcon />
      </IconButton>
      <IconButton aria-label="copy" onClick={handleCopy}>
        <FileCopyIcon />
      </IconButton>
    </div>
  );
};
