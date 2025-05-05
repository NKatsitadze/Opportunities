import { Typography } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Chart = function ({ history, weekNumber }) {
  const repProb = history ? history[weekNumber].repProb : 7;
  const pxProb = history ? history[weekNumber]?.XProb : 7;

  const data = [
    {
      name: "",
      RepProb: repProb,
      PxProb: pxProb
    }
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      {!history ? (
        <Typography sx={{ color: "#c5554b" }}>
          <br /> <br /> No Data, <br /> Chart Rendering Stopped
        </Typography>
      ) : (
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 0,
            left: -22,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar
            dataKey="RepProb"
            fill={
              repProb < 0.4
                ? "#c5554b"
                : repProb >= 0.4 && repProb < 0.8
                ? "#F4B740"
                : repProb >= 0.8
                ? "#81C995"
                : null
            }
            background={{ fill: "#eee" }}
          />
          <Bar
            dataKey="PxProb"
            fill={
              pxProb < 0.4
                ? "#c5554b"
                : pxProb >= 0.4 && pxProb < 0.8
                ? "#F4B740"
                : pxProb >= 0.8
                ? "#81C995"
                : null
            }
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default Chart;
