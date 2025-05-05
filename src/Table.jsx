import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Box
} from "@mui/material";

import StarRoundedIcon from "@mui/icons-material/StarRounded";

import Card from "./Card";
import Background from "./Background";

import * as opportunities from "./opportunities.json";

export default function BasicTable() {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;
  const [rowId, setRowId] = React.useState();

  const [popup, setPopup] = React.useState(false);

  function handleRowClick(event, row) {
    setRowId(row.oppId);
    setPopup(true);
  }

  const previousRow = function () {
    if (rowId === 1) {
      setRowId(data.length);
    } else {
      setRowId((prev) => prev - 1);
    }
  };

  const nextRow = function () {
    if (rowId === data.length) {
      setRowId(1);
    } else {
      setRowId((prev) => prev + 1);
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow:
            "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
          width: { xl: "80%", lg: "90%", xs: "100%" },
          margin: "1rem auto 0rem auto"
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "#c6c6c6",
                "& > *": { fontWeight: "bold" }
              }}
            >
              <Grid
                container
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1.5fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr 1.5fr",
                    sm: "1fr 1fr 1fr 1.5fr",
                    xs: "1fr 1fr 1fr 1.5fr",
                  },
                  alignItems: "center",
                  "& > *": {
                    textAlign: "start",
                    px: 1,
                    py: 1.5
                  },
                  justifyItems: "start"
                }}
              >
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    Opp Name
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    Sales Rep
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontSize: { sm: "auto", xs: "0.8rem" },
                      fontWeight: "bold",
                      border: "none",
                      p: { sm: 2, xs: 0.5 }
                    }}
                  >
                    Product
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontSize: { sm: "auto", xs: "0.8rem" },
                      fontWeight: "bold",
                      border: "none",
                      p: { sm: 2, xs: 0.5 }
                    }}
                  >
                    Amount
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    PX Tier
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    Rep Probability
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    PX Probability
                  </TableCell>
                </Grid>
                <Grid item>
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      border: "none",
                      whiteSpace: "nowrap",
                      p: { sm: 2, xs: 0.5 },
                      fontSize: { sm: "auto", xs: "0.8rem" }
                    }}
                  >
                    Opp Stage
                  </TableCell>
                </Grid>
              </Grid>
            </TableRow>
          </TableHead>






          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": { background: "#e0e0e0" },
                  "&:active": { background: "#cacaca" },
                  "&": { cursor: "pointer" },
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1.5fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr 1.5fr",
                    sm: "1fr 1fr 1fr 1.5fr",
                    xs: "1fr 1fr 1fr 1.5fr",
                  },
                  justifyItems: "start",
                  alignItems: "center",
                  "& > *": {
                    textAlign: "start",
                    px: 1,
                    py: 1.5
                  },
                  borderBottom: "1px solid #c6c6c6"
                }}
              >
                <TableCell sx={{ fontWeight: "bold", border: "none" }}>
                  {row.oppName}
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  {row.salesRepName}
                </TableCell>
                <TableCell sx={{ border: "none" }}>{row.product}</TableCell>
                <TableCell sx={{ border: "none" }}>{row.amount}</TableCell>
                <TableCell sx={{ border: "none" }}>
                  <Box
                    sx={{
                      bgcolor:
                        row.XTier.at(0) < 3
                          ? "#c5554b"
                          : row.XTier.at(0) >= 3 &&
                            row.XTier.at(0) <= 4
                          ? "#F4B740"
                          : row.XTier.at(0) > 4
                          ? "#81C995"
                          : null,
                      width: "2.8rem",
                      margin: "0 auto",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center"
                    }}
                  >
                    {row.XTier.at(0)}
                    <StarRoundedIcon />
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <Box
                    sx={{
                      background:
                        row.repProbability < 0.4
                          ? "#c5554b"
                          : row.repProbability >= 0.4 &&
                            row.repProbability < 0.8
                          ? "#F4B740"
                          : row.repProbability >= 0.8
                          ? "#81C995"
                          : null,
                      width: "2.5rem",
                      margin: "0 auto",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "4px",
                      textAlign: "center"
                    }}
                  >
                    {row.repProbability}
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none" }}>
                  <Box
                    sx={{
                      background:
                        row.XProbability < 0.4
                          ? "#c5554b"
                          : row.XProbability >= 0.4 &&
                            row.XProbability < 0.8
                          ? "#F4B740"
                          : row.XProbability >= 0.8
                          ? "#81C995"
                          : null,
                      width: "2.5rem",
                      margin: "0 auto",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "4px",
                      textAlign: "center"
                    }}
                  >
                    {row.XProbability}
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none", width: "100%" }} >
                  <Box
                    style={{
                      background:
                        row.stage.at(0) < 4
                          ? "#c5554b"
                          : row.stage.at(0) >= 4 && row.stage.at(0) < 8
                          ? "#F4B740"
                          : row.stage.at(0) >= 8
                          ? "#81C995"
                          : null,
                      margin: "0 auto",
                      padding: "0.2rem 0.4rem",
                      borderRadius: "4px",
                      textAlign: "center"
                    }}
                  >
                    {row.stage.slice(3)}
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      {popup ? <Background setPopup={setPopup} /> : null}
      {popup ? (
        <Card
          data={data}
          nextRow={nextRow}
          previousRow={previousRow}
          id={rowId}
          setPopup={setPopup}
        />
      ) : null}
    </>
  );
}
