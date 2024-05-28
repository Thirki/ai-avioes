import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { IRow } from "../types/tableTypes";

interface IExpandRowProps {
  row: IRow;
  open: boolean;
}

export const ExpandRow: React.FC<IExpandRowProps> = ({ row, open }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              History
            </Typography>
            <MuiTable size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Total price ($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.history.map((historyRow) => (
                  <TableRow key={historyRow.date}>
                    <TableCell component="th" scope="row">
                      {historyRow.date}
                    </TableCell>
                    <TableCell>{historyRow.customerId}</TableCell>
                    <TableCell align="right">{historyRow.amount}</TableCell>
                    <TableCell align="right">
                      {Math.round(historyRow.amount * row.price * 100) / 100}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </MuiTable>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
