import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const MuiTable = () => {
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ height: "400px", width: "1200px" }}
      >
        <Table aria-label="simple table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell align="center">Email </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.first_name}</TableCell>
                <TableCell>{row.last_name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const tableData = [
  {
    id: 1,
    first_name: "Prince",
    last_name: "Perrigo",
    email: "pperrigo0@miitbeian.gov.cn",
    gender: "Male",
    ip_address: "42.59.7.25",
  },
  {
    id: 2,
    first_name: "Radcliffe",
    last_name: "Ackermann",
    email: "rackermann1@usgs.gov",
    gender: "Male",
    ip_address: "165.104.103.80",
  },
  {
    id: 3,
    first_name: "Davey",
    last_name: "Scruby",
    email: "dscruby2@usatoday.com",
    gender: "Male",
    ip_address: "72.215.218.155",
  },
  {
    id: 4,
    first_name: "Mitch",
    last_name: "Klaas",
    email: "mklaas3@auda.org.au",
    gender: "Male",
    ip_address: "28.10.113.223",
  },
  {
    id: 5,
    first_name: "Gael",
    last_name: "Tym",
    email: "gtym4@symantec.com",
    gender: "Female",
    ip_address: "178.163.206.68",
  },
  {
    id: 6,
    first_name: "Lawrence",
    last_name: "Day",
    email: "lday5@si.edu",
    gender: "Male",
    ip_address: "78.222.12.193",
  },
  {
    id: 7,
    first_name: "Helge",
    last_name: "Fattorini",
    email: "hfattorini6@ucoz.com",
    gender: "Female",
    ip_address: "139.225.153.170",
  },
  {
    id: 8,
    first_name: "Kaitlynn",
    last_name: "Piddle",
    email: "kpiddle7@prnewswire.com",
    gender: "Female",
    ip_address: "133.189.79.175",
  },
  {
    id: 9,
    first_name: "Nicole",
    last_name: "Plunkett",
    email: "nplunkett8@goo.ne.jp",
    gender: "Female",
    ip_address: "168.10.34.115",
  },
  {
    id: 10,
    first_name: "Rich",
    last_name: "Sherrin",
    email: "rsherrin9@pen.io",
    gender: "Male",
    ip_address: "20.93.21.172",
  },
];
