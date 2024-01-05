import React, {PureComponent} from 'react';
import { RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar,AreaChart,Bar, BarChart, Rectangle, Area, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';

export default function Dashboard (){
  const data = [
    {
      name: 'Jan',
      pv: 1200,
      amt: 2000,
    },
    {
      name: 'Feb',
      pv: 1600,
      amt: 2400,
    },
    {
      name: 'March',
      pv: 1998,
      amt: 2210,
    },
    {
      name: 'Apr',
      pv: 2098,
      amt: 2210,
    },
    {
      name: 'May',
      pv: 1000,
      amt: 2290,
    },
    {
      name: 'June',
      pv: 2050,
      amt: 2290,
    },
    {
      name: 'July',
      pv: 2058,
      amt: 2000,
    },
    {
      name: 'Aug',
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Sep',
      pv: 1990,
      amt: 2000,
    },
    {
      name: 'Oct',
      pv: 1800,
      amt: 2181,
    },
    {
      name: 'Nov',
      pv: 1300,
      amt: 2500,
    },
    {
      name: 'Dec',
      pv: 1800,
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

  const datar = [
    {
      subject: 'Math',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Chinese',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'English',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Geography',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Physics',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'History',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
return(
  <div className="h-screen py-0 flex flex-col">
      <div className="flex-1 flex flex-row">
        {/* Upper Left */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="80%">
        <AreaChart width={630} height={300} data={data}
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

</ResponsiveContainer>
        </div>
        
        {/* Upper Right */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={200}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
        </div>
      </div>
      
      <div className="flex-1 flex flex-row">
        {/* Lower Left */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={datar}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
        </div>
        
        {/* Lower Right */}
        <div className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={200}
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

