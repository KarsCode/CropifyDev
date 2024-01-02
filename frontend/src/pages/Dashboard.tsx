import React, {PureComponent} from 'react';
import { RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar,AreaChart,Bar, BarChart, Rectangle, Area, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

export default function Dashboard (){
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
  ];

  const data1 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 50, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 80, z: 200 },
    { x: 40, y: 200, z: 200 },
    { x: 220, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 110, y: 250, z: 280 },
    { x: 50, y: 40, z: 50 },
  ];
  
  const data001 = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const data002 = [
    { x: 300, y: 300, z: 200 },
    { x: 400, y: 500, z: 260 },
    { x: 200, y: 700, z: 400 },
    { x: 340, y: 350, z: 280 },
    { x: 230, y: 780, z: 200 },
    { x: 500, y: 400, z: 200 },
    { x: 300, y: 500, z: 260 },
    { x: 240, y: 300, z: 400 },
    { x: 320, y: 550, z: 280 },
    { x: 500, y: 400, z: 500 },
    { x: 420, y: 280, z: 200 },
  ];


return(
  <div className="h-screen py-0 flex flex-col">
      <div className="flex-1 flex flex-row">
        {/* Upper Left */}
        <div className="flex-1 flex items-center justify-center">
        <AreaChart width={630} height={350} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </div>
        
        {/* Upper Right */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>
      
      <div className="flex-1 flex flex-row">
        {/* Lower Left */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            orientation="right"
            stroke="#82ca9d"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter yAxisId="left" name="A school" data={data001} fill="#8884d8" />
          <Scatter yAxisId="right" name="A school" data={data002} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
        </div>
        
        {/* Lower Right */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
};

