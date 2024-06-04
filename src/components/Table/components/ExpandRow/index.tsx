import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { ActionButtons } from "../ActionButtons";
import { useGetLeadDetails } from "../../../../api";
import { Time } from "../../../Time";
import { SkeletonRow } from "../SkeletonRow";

interface IExpandRowProps {
  id: string;
  open: boolean;
}

const whiteSpace = "nowrap";

export const ExpandRow: React.FC<IExpandRowProps> = ({ id, open }) => {
  const { data, isLoading } = useGetLeadDetails(id);

  const renderTable = () => {
    if (!isLoading && data?.length) {
      return data.map((lead) => (
        <TableRow key={lead.id}>
          <TableCell style={{ whiteSpace }}>{lead.id}</TableCell>
          <TableCell style={{ whiteSpace }}>{lead.email}</TableCell>
          <TableCell style={{ whiteSpace }}>{lead.phone}</TableCell>
          <TableCell style={{ whiteSpace }}>{lead.city}</TableCell>
          <TableCell style={{ whiteSpace }}>{lead.state}</TableCell>
          <TableCell style={{ whiteSpace: "nowrap" }}>
            <Time date={new Date(lead.createdAt)} />
          </TableCell>
          <TableCell align="center">
            <ActionButtons leadsDetails={lead} />
          </TableCell>
        </TableRow>
      ));
    }
  };

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
                  <TableCell style={{ whiteSpace }}>id</TableCell>
                  <TableCell style={{ whiteSpace }}>E-mail</TableCell>
                  <TableCell style={{ whiteSpace }}>Telefone</TableCell>
                  <TableCell style={{ whiteSpace }}>Cidade</TableCell>
                  <TableCell style={{ whiteSpace }}>Estado</TableCell>
                  <TableCell style={{ whiteSpace }}>Data de Criação</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{renderTable()}</TableBody>
            </MuiTable>
            {isLoading && <SkeletonRow gap="5px" />}
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
};
