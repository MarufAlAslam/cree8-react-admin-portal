import React, { PureComponent } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data02 = [
  { name: "Active", value: 30, fill: "#00A2FE" },
  { name: "Completed", value: 45, fill: "#50CD89" },
  { name: "Overdue", value: 45, fill: "#F1416C" },
  { name: "Yet to Start", value: 24, fill: "#EEF0F5" },
];

export default class NewPieChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/pie-chart-of-two-levels-gor24";

  render() {
    return (
      <div className="lg:flex justify-between items-center px-5">
        <div className="lg:w-1/2">
          <ResponsiveContainer className={"pieC"} width="100%" height="100%">
            <PieChart width={400} height={400}>
              <Pie
                data={data02}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                fill="#82ca9d"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="lg:w-1/2">
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="flex justify-start items-center">
                            <div className="w-3 h-3 rounded-full bg-[#00A2FE] mr-3"></div>
                            <p className="text-[#A1A1A1]">Active</p>
                        </td>
                        <td className="text-right">30</td>
                    </tr>
                    <tr>
                        <td className="flex justify-start items-center">
                            <div className="w-3 h-3 rounded-full bg-[#50CD89] mr-3"></div>
                            <p className="text-[#A1A1A1]">Completed</p>
                        </td>
                        <td className="text-right">45</td>
                    </tr>
                    <tr>
                        <td className="flex justify-start items-center">
                            <div className="w-3 h-3 rounded-full bg-[#F1416C] mr-3"></div>
                            <p className="text-[#A1A1A1]">Overdue</p>
                        </td>
                        <td className="text-right">45</td>
                    </tr>
                    <tr>
                        <td className="flex justify-start items-center">

                            <div className="w-3 h-3 rounded-full bg-[#EEF0F5] mr-3"></div>
                            <p className="text-[#A1A1A1]">Yet to Start</p>
                        </td>
                        <td className="text-right">24</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    );
  }
}
