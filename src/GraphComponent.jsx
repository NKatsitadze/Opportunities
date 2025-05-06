import { Container, Box, Typography } from "@mui/material";

import FactorsContent from "./FactorsContent";

import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const GraphComponent = function ({ objData }) {
  const totalIncreaseWins = objData.XFactorsIncreasingWin;
  const totalDecreaseWins = objData.XFactorsDecreasingWin;

  const increase1values = totalIncreaseWins?.filter((each) => {
    return each.weight.value === 1;
  });
  const increase2values = totalIncreaseWins?.filter((each) => {
    return each.weight.value === 2;
  });
  const increase3values = totalIncreaseWins?.filter((each) => {
    return each.weight.value === 3;
  });
  const decrease1values = totalDecreaseWins?.filter((each) => {
    return each.weight.value === -1;
  });
  const decrease2values = totalDecreaseWins?.filter((each) => {
    return each.weight.value === -2;
  });
  const decrease3values = totalDecreaseWins?.filter((each) => {
    return each.weight.value === -3;
  });

  const data = [
    { name: "Group A", value: totalIncreaseWins?.length },
    { name: "Group B", value: totalDecreaseWins?.length }
  ];
  const data2 = [
    { name: "Group A", value: increase1values?.length },
    { name: "Group B", value: increase2values?.length },
    { name: "Group C", value: increase3values?.length }
  ];
  const data3 = [
    { name: "Group A", value: decrease1values?.length },
    { name: "Group B", value: decrease2values?.length },
    { name: "Group C", value: decrease3values?.length }
  ];

  const COLORS = ["#00B273", "#e95b4d"];
  const COLORS2 = ["#81C995", "#00B273", "#009988"];
  const COLORS3 = ["#FF9D9A", "#FF7773", "#e95b4d"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#161616"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: { sm: 4, xs: 0 }
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { sm: "row", xs: "column" },
          justifyContent: "center",
          overflow: "hidden",
          bgcolor: "#EBEBF0",
          height: { sm: "17rem", xs: "45rem" },
          width: "100%",
          gap: 4
        }}
      >
        <Box
          sx={{
            width: { sm: "25%", xs: "100%" },
            height: "11rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            transform: { sm: "translateY(0rem)", xs: "translateY(-3rem)" },
            justifyContent: "center",
            position: "relative"
          }}
        >
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx={200}
              cy={200}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              animationDuration={500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <Typography
            sx={{
              position: "absolute",
              bottom: { sm: "-4.55rem", xs: "-3.55rem" },
              textAlign: "center",
              fontWeight: "bold",
              whiteSpace: "nowrap"
            }}
            variant="body2"
          >
            Total of{" "}
            <span style={{ color: "#009988" }}>
              {totalIncreaseWins ? totalIncreaseWins.length : "0"} Increasing
            </span>{" "}
            <br /> and{" "}
            <span style={{ color: "#e95b4d" }}>
              {totalDecreaseWins ? totalDecreaseWins.length : "0"} Decreasing
            </span>{" "}
            <br />
            factors
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: "25%", xs: "100%" },
            height: "11rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            transform: { sm: "translateY(0rem)", xs: "translateY(-1rem)" }
          }}
        >
          {!totalIncreaseWins ? (
            <Typography>No Results</Typography>
          ) : (
            <PieChart width={400} height={400}>
              <Pie
                data={data2}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                animationDuration={500}
              >
                {data2.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS2[index % COLORS2.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: { sm: "-4.7rem", xs: "-1.5rem" },
              textAlign: "center",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              display: { sm: "block", xs: "flex" },
              gap: 1
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#81C995"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Weak Positive
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#00B273"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Positive
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#009988"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Strong Positive
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: { sm: "25%", xs: "100%" },
            height: "11rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: { sm: "translateY(0rem)", xs: "translateY(-1.5rem)" },
            position: "relative"
          }}
        >
          {!totalDecreaseWins ? (
            <Typography>No Results</Typography>
          ) : (
            <PieChart width={400} height={400}>
              <Pie
                data={data3}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                animationDuration={500}
              >
                {data3.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS3[index % COLORS3.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: { sm: "-4.7rem", xs: "-1.5rem" },
              textAlign: "center",
              fontWeight: "bold",
              whiteSpace: "nowrap",
              display: { sm: "block", xs: "flex" },
              gap: 1
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#FF9D9A"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Weak Negative
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#FF7773"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Negative
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { sm: 1, xs: 0.2 }
              }}
            >
              <Box
                sx={{
                  height: "1rem",
                  width: "1rem",
                  borderRadius: "50%",
                  bgcolor: "#e95b4d"
                }}
              ></Box>
              <Typography sx={{ fontWeight: "bold" }} variant="body2">
                Strong Negative
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <FactorsContent
        increases={totalIncreaseWins}
        decreases={totalDecreaseWins}
      />
    </Container>
  );
};

export default GraphComponent;
