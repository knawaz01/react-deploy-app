import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Feb', uv: 3000 },
  { name: 'Jan', uv: 4000 },
  { name: 'Mar', uv: 2000 },
  { name: 'Apr', uv: 2780 },
  { name: 'May', uv: 1890 },
  { name: 'Jun', uv: 2390 },
  { name: 'Jul', uv: 3490 },
  { name: 'Aug', uv: 4000 },
  { name: 'Sep', uv: 3000 },
  { name: 'Oct', uv: 2000 },
  { name: 'Nov', uv: 2780 },
  { name: 'Dec', uv: 1890 },
];

const CustomBar = (props) => {
  const { x, y, width, height } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={15} 
        ry={15} 
        fill={props.fill}
        
      />
    </g>
  );
};

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" axisLine={false} tickLine={{ stroke: 'transparent' }}/>
        <Bar shape={<CustomBar />} dataKey="uv" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
