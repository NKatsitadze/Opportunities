import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import Card from "./Card";
import Background from "./Background";
import * as opportunities from "./opportunities.json";

export default function BasicTable() {
  const data = opportunities.default;
  const [rowId, setRowId] = React.useState();
  const [popup, setPopup] = React.useState(false);

  const handleRowClick = (row) => {
    setRowId(row.oppId);
    setPopup(true);
  }

  const previousRow = () =>
    setRowId((prev) => (prev === 1 ? data.length : prev - 1));

  const nextRow = () =>
    setRowId((prev) => (prev === data.length ? 1 : prev + 1));

  const getColor = (value, thresholds) => {
    if (value < thresholds[0]) return "#e95b4d";
    if (value < thresholds[1]) return "#F4B740";
    return "#81C995";
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow:
            "0px 6px 14px -6px rgba(24, 39, 75, 0.12), 0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
          width: { xl: "80%", lg: "90%", xs: "100%" },
          margin: "1rem auto 0"
        }}
      >
        <Table>
          <TableHead>
            <TableRow  sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1.5fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr 1.5fr",
                    sm: "1fr 1fr 1fr 1.5fr",
                    xs: "1fr 1fr 1fr 1.5fr"
                  },
                  rowGap: 1,
                  textAlign: "start",
                  padding: "8px 0",
                  fontSize: "12px"
                }}>
              {[
                "Opp name",
                "Sales rep",
                "Product",
                "Amount",
                "Tier",
                "Rep %",
                "PX %",
                "Opp stage"
              ].map((header, index) => (
                <TableCell
                  key={index}
                  sx={{
                    fontWeight: "bold",
                    padding: "8px 16px",
                    fontSize: "12px",
                    whiteSpace: "nowrap"
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.oppId}
                onClick={() => handleRowClick(row)}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    md: "1.5fr 1fr 1fr 1fr 0.5fr 0.5fr 0.5fr 1.5fr",
                    sm: "1fr 1fr 1fr 1.5fr",
                    xs: "1fr 1fr 1fr 1.5fr"
                  },
                  justifyItems: "start",
                  alignItems: "center",
                  "&:hover": { background: "#e0e0e0" },
                  "&:active": { background: "#cacaca" },
                  cursor: "pointer",
                  borderBottom: "1px solid #c6c6c6",
                  "& > *": {
                    textAlign: "start",
                    px: 1,
                    py: 1.5,
                    border: "none"
                  }
                }}
              >
                <TableCell sx={{ fontWeight: "bold", borderBottom: "none"}}>{row.oppName}</TableCell>
                <TableCell sx={{borderBottom: "none"}}>{row.salesRepName}</TableCell>
                <TableCell sx={{borderBottom: "none"}}>{row.product}</TableCell>
                <TableCell sx={{borderBottom: "none"}}>{row.amount}</TableCell>

                <TableCell sx={{borderBottom: "none"}}>
                  <Box
                    sx={{
                      bgcolor: getColor(row.XTier.at(0), [3, 5]),
                      width: "2.8rem",
                      m: "0 auto",
                      px: 0.5,
                      py: 0.2,
                      borderRadius: "4px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    {row.XTier.at(0)}
                    <StarRoundedIcon fontSize="small" />
                  </Box>
                </TableCell>

                <TableCell sx={{borderBottom:"none"}}>
                  <Box
                    sx={{
                      bgcolor: getColor(row.repProbability, [0.4, 0.8]),
                      width: "2.5rem",
                      m: "0 auto",
                      px: 0.5,
                      py: 0.2,
                      borderRadius: "4px",
                      textAlign: "center"
                    }}
                  >
                    {row.repProbability}
                  </Box>
                </TableCell>

                <TableCell sx={{borderBottom: "none"}}>
                  <Box
                    sx={{
                      bgcolor: getColor(row.XProbability, [0.4, 0.8]),
                      width: "2.5rem",
                      m: "0 auto",
                      px: 0.5,
                      py: 0.2,
                      borderRadius: "4px",
                      textAlign: "center",
                      borderBottom: "none"
                    }}
                  >
                    {row.XProbability}
                  </Box>
                </TableCell>

                <TableCell sx={{borderBottom: "none", width: "100%"}}>
                  <Box
                    sx={{
                      bgcolor: getColor(row.stage.at(0), [4, 8]),
                      m: "0 auto",
                      px: 0.5,
                      py: 0.2,
                      borderRadius: "4px",
                      textAlign: "center",
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

      {popup && (
        <>
          <Background setPopup={setPopup} />
          <Card
            data={data}
            nextRow={nextRow}
            previousRow={previousRow}
            id={rowId}
            setPopup={setPopup}
          />
        </>
      )}
    </>
  );
}
