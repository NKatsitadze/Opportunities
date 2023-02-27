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
        <Typography sx={{ color: "#FC5753" }}>
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
          {/* <Legend /> */}
          <Bar
            dataKey="RepProb"
            fill={
              repProb < 0.4
                ? "#FC5753"
                : repProb >= 0.4 && repProb < 0.8
                ? "#FDBC40"
                : repProb >= 0.8
                ? "#36C84B"
                : null
            }
            background={{ fill: "#eee" }}
          />
          <Bar
            dataKey="PxProb"
            fill={
              pxProb < 0.4
                ? "#FC5753"
                : pxProb >= 0.4 && pxProb < 0.8
                ? "#FDBC40"
                : pxProb >= 0.8
                ? "#36C84B"
                : null
            }
          />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
};

export default Chart;
