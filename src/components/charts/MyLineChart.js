import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';


const MyLineChart = (props) => {
  return (
    <ResponsiveContainer height={400} width='100%'>
      <LineChart
        data={props.data}
        margin={{ top: 20, left: -10 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#f3c363" strokeWidth="3" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#eb3349" strokeWidth="3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default MyLineChart
