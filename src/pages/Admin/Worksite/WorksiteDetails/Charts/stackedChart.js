import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 100,
    b: 400,
    c: 450,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 400,
    b: 400,
    c: 250,
    d: 150,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 15,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
  {
    name: 'ABC',
    a: 300,
    b: 400,
    c: 250,
    d: 50,
    e: 400
  },
//   generate 13 more using random values near to this with the same name
];

export default class Stacked extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/stacked-bar-chart-s47i2';

  render() {
    return (
      <ResponsiveContainer className={"barC"} width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip fill="transparent" />
          <Legend />
          <Bar dataKey="a" barSize={12} stackId="a" fill="#FF922B" />
          <Bar dataKey="b" barSize={12} stackId="a" fill="#40C057" />
          <Bar dataKey="c" barSize={12} stackId="a" fill="#FFD43B" />
          <Bar dataKey="d" barSize={12} stackId="a" fill="#748FFC" />
          <Bar dataKey="e" barSize={12} stackId="a" fill="#F03E3E" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
