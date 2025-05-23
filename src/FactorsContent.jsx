import { Box, Typography, Button } from "@mui/material";

import { useState } from "react";

const FactorsContent = function ({ increases, decreases }) {
  const [renderWins, setRenderWins] = useState(true);

  const increasesHandler = function () {
    setRenderWins(true);
  };
  const decreasesHandler = function () {
    setRenderWins(false);
  };

  const increasesContent = increases?.map((each) => {
    return (
      <Box
        key={`${each.name + each.message}`}
        sx={{ display: "grid", gridTemplateColumns: "1.5rem 1fr" }}
      >
        <Box
          sx={{
            height: "1rem",
            width: "1rem",
            borderRadius: "50%",
            mt: 0.4,
            bgcolor:
              each.weight.value === 1
                ? "#81C995"
                : each.weight.value === 2
                ? "#00B273"
                : each.weight.value === 3
                ? "#009988"
                : ""
          }}
        ></Box>
        <Typography variant="body1" align="left">
          <span style={{ fontWeight: "bold" }}>{each.name}</span> -{" "}
          {each.message}
        </Typography>
      </Box>
    );
  });

  const emptyContent = (
    <Typography align="center">No Results To Show</Typography>
  );

  const decreasesContent = decreases?.map((each) => {
    return (
      <Box
        key={`${each.name + each.message}`}
        sx={{ display: "grid", gridTemplateColumns: "1.5rem 1fr" }}
      >
        <Box
          sx={{
            height: "1rem",
            width: "1rem",
            borderRadius: "50%",
            mt: 0.4,
            bgcolor:
              each.weight.value === -1
                ? "#FF9D9A"
                : each.weight.value === -2
                ? "#FF7773"
                : each.weight.value === -3
                ? "#e95b4d"
                : ""
          }}
        ></Box>
        <Typography variant="body1" align="left">
          <span style={{ fontWeight: "bold" }}>{each.name}</span> -{" "}
          {each.message}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        boxShadow: "0px 6px 14px -6px rgba(24, 39, 75, 0.12),0px 10px 32px -4px rgba(24, 39, 75, 0.1)",
        padding: "6px 10px",
        borderRadius: "6px",
        mt: {
          lg: 3,
          md: 1,
          sm: 2
        },
        width: {
          md: "70%",
          sm: "85%"
        }
      }}
    >
      <Box sx={{ display: "flex", gap: 1, alignSelf: "center" }}>
        <Button onClick={increasesHandler} color="success" variant="contained">
          Increasings
        </Button>
        <Button onClick={decreasesHandler} color="error" variant="contained">
          Decreasings
        </Button>
      </Box>
      <Box sx={{ overflowY: "auto", maxHeight: "14rem" }}>
        {renderWins && increases
          ? increasesContent
          : renderWins && !increases
          ? emptyContent
          : !renderWins && decreases
          ? decreasesContent
          : !renderWins && !decreases
          ? emptyContent
          : ""}
      </Box>
    </Box>
  );
};

export default FactorsContent;
