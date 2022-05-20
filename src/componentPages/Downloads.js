import React from "react";
import p1 from "../ucardPDF/p1.pdf";
import p2 from "../ucardPDF/p2.pdf";
import p3 from "../ucardPDF/p3.pdf";
import p4 from "../ucardPDF/p4.pdf";
import p5 from "../ucardPDF/p5.pdf";
import p6 from "../ucardPDF/p6.pdf";
import p7 from "../ucardPDF/p7.pdf";
import p8 from "../ucardPDF/p8.pdf";
import p9 from "../ucardPDF/p9.pdf";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";

function createData(Materials, p) {
  return { Materials, p };
}
const rows = [
  createData(" ADIP Scheme", p1),
  createData("Guidelines / Procedures - Leprosy Affected", p2),
  createData("List of Implementing Agencies", p3),
  createData("Guidelines / Procedures - Motorized Tricycle", p4),
  createData(
    "Guidelines for issuing of disability certificate to CWSN-ADIP SSA",
    p5
  ),
  createData("Aids and assistive devices - Visually Impaired", p6),
  createData("Aids and assistive devices - Orthopedically Impaired", p7),
  createData(" Legacy Excel Upload by agency User Manual", p8),
  createData("Legacy Excel Upload by agency User Manual", p9),
];

const Downloads = () => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ maxWidth: 650, margin: "auto" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <Typography variant="h4">Materials</Typography>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Materials}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <a
                    style={{
                      color: "blue",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                    }}
                    href={row.p}
                    download
                    target="_blank"
                    rel="noreferrer"
                  >
                    {row.Materials}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Downloads;
