import * as React from "react";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Button
} from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { useState } from "react";

import Chart from "./Chart";
import GraphComponent from "./GraphComponent";

const CardComponent = function ({ id, data, nextRow, previousRow, setPopup }) {
  const [value, setValue] = useState(0);

  const changeHandler = function (event) {
    setValue(event.target.value);
  };

  const nextClickHandler = function () {
    nextRow();
    setValue(0);
  };

  const previousClickHandler = function () {
    previousRow();
    setValue(0);
  };

  const closeHandler = function () {
    setPopup(false);
  };

  const givenData = data.filter((each) => {
    return each.oppId === id;
  });
  const objData = givenData[0];

  const oppName = objData.oppName;
  const salesRepName = objData.salesRepName;
  const totalWeeks = objData.probabilityHistory
    ? objData.probabilityHistory[0].daysAgo / 7
    : 7;
  const probHistory = objData.probabilityHistory;

  const card = (
    <React.Fragment>
      <CardContent
        sx={{
          bgcolor: "#EBEBF0",
          display: "flex",
          flexDirection: "column",
          gap: { md: 0, xs: 0.5 }
        }}
      >
        <Typography
          sx={{ fontWeight: "bold" }}
          align="center"
          variant="h5"
          component="div"
        >
          {oppName} / {salesRepName}
        </Typography>
        <Typography sx={{ mt: 2 }} align="center" variant="h6">
          Product / Amount - {objData.product}, {objData.amount}
          <br />
        </Typography>
        <Typography
          sx={{
            bgcolor:
              objData.stage.at(0) < 4
                ? "#e95b4d"
                : objData.stage.at(0) >= 4 && objData.stage.at(0) < 8
                ? "#F4B740"
                : objData.stage.at(0) >= 8
                ? "#81C995"
                : null,
            px: 1,
            borderRadius: 1
          }}
          align="center"
          variant="h6"
        >
          {objData.stage.slice(2)}
        </Typography>
        <Box
          sx={{
            mt: 1,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            justifyContent: "end",
            alignItems: "center"
          }}
        >
          <Typography>PX Tier</Typography>
          <Typography>Rep Prob</Typography>
          <Typography>PX Prob</Typography>
          <Typography
            sx={{
              display: "flex",
              justifySelf: "center",
              alignItems: "center",
              gap: 0.4,
              fontWeight: "bold",
              bgcolor:
                objData.XTier.at(0) < 3
                  ? "#e95b4d"
                  : objData.XTier.at(0) >= 3 &&
                    objData.XTier.at(0) <= 4
                  ? "#F4B740"
                  : objData.XTier.at(0) > 4
                  ? "#81C995"
                  : null,
              borderRadius: 1,
              px: 1
            }}
          >
            {objData.XTier.at(0)}
            <StarRoundedIcon sx={{ mb: "1px" }} />
          </Typography>
          <Typography
            sx={{
              bgcolor:
                objData.repProbability < 0.4
                  ? "#e95b4d"
                  : objData.repProbability >= 0.4 &&
                    objData.repProbability < 0.8
                  ? "#F4B740"
                  : objData.repProbability >= 0.8
                  ? "#81C995"
                  : null,
              justifySelf: "center",
              borderRadius: 1,
              px: 1,
              fontWeight: "bold"
            }}
          >
            {objData.repProbability}
          </Typography>
          <Typography
            sx={{
              bgcolor:
                objData.XProbability < 0.4
                  ? "#e95b4d"
                  : objData.XProbability >= 0.4 &&
                    objData.XProbability < 0.8
                  ? "#F4B740"
                  : objData.XProbability >= 0.8
                  ? "#81C995"
                  : null,
              justifySelf: "center",
              borderRadius: 1,
              px: 1,
              fontWeight: "bold"
            }}
          >
            {objData.XProbability}
          </Typography>
        </Box>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: 1,
        pt: 5,
        px: {
          md: "1.5rem",
          xs: 0
        },
        pb: 1.5,
        overflow: "hidden",
        position: "fixed",
        left: {
          md: "50%",
          xs: "0"
        },
        top: {
          md: "50%",
          xs: "0"
        },
        transform: {
          md: "translate(-50%, -50%)",
        },
        border: "none",
        boxShadow: "none",
        width: {
          lg: "100%",
          md: "90%",
          xs: "100%"
        },
        height: {
          md: "90%",
          xs: "100%"
        },
        overflowY: "auto",
        bgcolor: "#EBEBF0"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            md: "row",
            xs: "column"
          },
          justifyContent: "center",
          alignItems: "center",
          gap: 1,
          borderBottom: "1px solid #c6c6c6",
          pb: {
            md: 5,
            sm: 8,
            xs: 11
          }
        }}
      >
        <Box
          sx={{
            minWidth: 275,
            pt: { md: 5, xs: 0 },
            borderBottom: { sm: "none", xs: "1px solid #c6c6c6" }
          }}
        >
          <Card
            sx={{ borderRadius: "0rem", border: "none", boxShadow: "none" }}
          >
            {card}
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: {
              md: "1rem",
              sm: "0rem"
            },
            p: {
              md: 2,
              sm: 0.5
            },
            mt: {
              md: 4,
              xs: 0
            },
            border: "none"
          }}
        >
          <Box sx={{ height: "12rem" }}>
            <Chart weekNumber={value} history={probHistory} />
            {!objData.probabilityHistory ? null : (
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", transform: "translateY(-0.5rem)" }}
              >
                Probs History <br /> {totalWeeks - value} Week
                {totalWeeks - value === 1 ? "" : "s"} Ago
              </Typography>
            )}
            {!objData.probabilityHistory ? null : (
              <Box sx={{ mt: { md: 0, xs: 2 } }}>
                <input
                  style={{ width: "12rem" }}
                  className="range"
                  value={value}
                  type="range"
                  min="0"
                  max={totalWeeks - 1}
                  step="1"
                  onChange={changeHandler}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <GraphComponent objData={objData} />
      <Box
        sx={{
          position: "fixed",
          right: "0.2rem",
          top: "0.2rem",
          display: "flex",
          alignItems: "center",
          gap: 0.5
        }}
      >
        <Box>
          <Button onClick={previousClickHandler} size="xs" variant="outlined">
            <ArrowBackIosRoundedIcon fontSize="small" />
          </Button>
          <Button onClick={nextClickHandler} size="xs" variant="outlined">
            <ArrowForwardIosRoundedIcon fontSize="small" />
          </Button>
        </Box>
        <Button
          color="error"
          onClick={closeHandler}
          size="xs"
          variant="contained"
        >
          <CloseRoundedIcon />
        </Button>
      </Box>
    </Container>
  );
};

export default CardComponent;
