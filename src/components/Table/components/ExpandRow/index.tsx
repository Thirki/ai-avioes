import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { ILeadsGroup } from "../types/tableTypes";
import { ActionButtons } from "../ActionButtons";

interface IExpandRowProps {
  row: ILeadsGroup;
  open: boolean;
}

export const ExpandRow: React.FC<IExpandRowProps> = ({ row, open }) => {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              Detalhes dos Leads:
            </Typography>
            <MuiTable size="small" aria-label="purchases">
              <TableHead>
                <TableRow>
                  <TableCell>id</TableCell>
                  <TableCell>Telefone</TableCell>
                  <TableCell>E-mail</TableCell>
                  <TableCell>Cidade</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.leadsDetails.map((leadDetail) => (
                  <TableRow key={leadDetail.id}>
                    <TableCell>{leadDetail.id}</TableCell>
                    <TableCell>{leadDetail.phone}</TableCell>
                    <TableCell>{leadDetail.email}</TableCell>
                    <TableCell>{leadDetail.city}</TableCell>
                    <TableCell align="center">
                      <ActionButtons leadsDatails={leadDetail} />
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
