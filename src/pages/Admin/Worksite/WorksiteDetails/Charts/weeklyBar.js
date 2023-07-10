import React, { PureComponent } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Mon",
    val: 50,
  },
  {
    name: "Tue",
    val: 100,
  },
  {
    name: "Wed",
    val: 150,
  },
  {
    name: "Thu",
    val: 230,
  },
  {
    name: "Fri",
    val: 120,
  },
  {
    name: "Sat",
    val: 60,
  },
  {
    name: "Sun",
    val: 80,
  },
];

export default class WeeklyBar extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/tiny-bar-chart-35meb";

  render() {
    return (
    //   <ResponsiveContainer className={"weekBar"} width="100%" height="100%">
    //     <BarChart width={150} height={40} data={data}>
    //       <Bar dataKey="val" barSize={16} fill="#EEEDFC" />
    //     </BarChart>
    //   </ResponsiveContainer>
      <ResponsiveContainer className={"weekBar"} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="val" barSize={16} fill="#EEEDFC" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
