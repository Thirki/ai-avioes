import { default as MuiTable } from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import mocketData from "./mockedData.json";
import { Row } from "./components";

export function Table() {
  return (
    <TableContainer component={Paper}>
      <MuiTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Expandir</TableCell>
            <TableCell>id</TableCell>
            <TableCell>Form Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mocketData.map((data) => (
            <Row key={data.id} row={data} />
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
