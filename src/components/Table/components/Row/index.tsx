import React from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ExpandRow } from "../ExpandRow";
import { LeadsGroup } from "../../../../api";
import { Time } from "../../../Time";

interface IRowProps {
  row: LeadsGroup;
}

const whiteSpace = "nowrap";

export const Row: React.FC<IRowProps> = ({ row }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell style={{ whiteSpace }} component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell style={{ whiteSpace }}>{row.name}</TableCell>
        <TableCell style={{ whiteSpace }}>{row.source}</TableCell>
        <TableCell style={{ whiteSpace }}>{row.totalLeads}</TableCell>
        <TableCell style={{ whiteSpace }}>{row.invalidLeads}</TableCell>
        <TableCell style={{ whiteSpace }}>
          <Time date={new Date(row.createdAt)} />
        </TableCell>
        <TableCell style={{ whiteSpace }}>
          <Time date={new Date(row.updatedAt)} />
        </TableCell>
        <TableCell style={{ whiteSpace }}>{row.status}</TableCell>
      </TableRow>
      {open && <ExpandRow id={row.id} open={open} />}
    </React.Fragment>
  );
};
