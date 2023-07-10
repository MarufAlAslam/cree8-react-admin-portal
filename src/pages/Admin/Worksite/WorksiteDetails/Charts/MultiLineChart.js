import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'OCT 22',
    a: 100,
    b: 50,
    c: 143,
    d: 33
  },
  {
    name: 'NOV 22',
    a: 200,
    b: 100,
    c: 243,
    d: 33
  },
  {
    name: 'DEC 22',
    a: 300,
    b: 150,
    c: 343,
    d: 312
  },
  {
    name: 'JAN 22',
    a: 100,
    b: 50,
    c: 143,
    d: 50
  },
  {
    name: 'FEB 22',
    a: 200,
    b: 100,
    c: 243,
    d: 33
  },
  {
    name: 'MAR 22',
    a: 300,
    b: 150,
    c: 343,
    d: 312
  },
  {
    name: 'APR 22',
    a: 100,
    b: 50,
    c: 143,
    d: 50
  }
];

export default class MultiLineChart extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/line-chart-width-xaxis-padding-sujqi';

  render() {
    return (
      <ResponsiveContainer className={"multiline"} width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="a" strokeWidth={2} stroke="#3366CC" />
          <Line type="monotone" dataKey="b" strokeWidth={2} stroke="#DC3912" />
          <Line type="monotone" dataKey="c" strokeWidth={2} stroke="#FF9900" />
          <Line type="monotone" dataKey="d" strokeWidth={2} stroke="#109618" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}
