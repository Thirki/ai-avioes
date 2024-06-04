import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Row, SkeletonRow } from "./components";
import { useGetLeads } from "../../api";

const whiteSpace = "nowrap";

export function Table() {
  const { data, isLoading } = useGetLeads();
  return (
    <TableContainer component={Paper}>
      <MuiTable size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ whiteSpace }}>Expandir</TableCell>
            <TableCell style={{ whiteSpace }}>ID do Grupo</TableCell>
            <TableCell style={{ whiteSpace }}>Nome do Grupo</TableCell>
            <TableCell style={{ whiteSpace }}>Fonte</TableCell>
            <TableCell style={{ whiteSpace }}>Número de Leads</TableCell>
            <TableCell style={{ whiteSpace }}>Leads Inválidos</TableCell>
            <TableCell style={{ whiteSpace }}>Data de Criação</TableCell>
            <TableCell style={{ whiteSpace }}>Última Atualização</TableCell>
            <TableCell style={{ whiteSpace }}>Status</TableCell>
          </TableRow>
        </TableHead>
        {!isLoading && (
          <TableBody>
            {data?.map((data) => (
              <Row key={data.id} row={data} />
            ))}
          </TableBody>
        )}
      </MuiTable>
      {isLoading && <SkeletonRow />}
    </TableContainer>
  );
}
