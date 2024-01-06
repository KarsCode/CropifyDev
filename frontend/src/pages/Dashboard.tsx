import React, { useState } from 'react';
import { Cell, RadarChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, AreaChart, Bar, BarChart, Rectangle, Area, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';


interface Data {
  name: string;
  price: number;
  amt: number;
}

interface Data2 {
  name: string;
  value: number;
}

interface ChartData {
  cropType: string;
    pestResistance: number;
    diseaseResistance: number;
    climateTolerance: number;
    nutrientUptake: number;
    growthVigor: number;
}

const YourComponent: React.FC = () => {
  const [selectedData1, setSelectedData1] = useState<string>('data1'); // Initial selected data for first dropdown
  const [selectedData2, setSelectedData2] = useState<string>('data01'); // Initial selected data for second dropdown


  const handleSelectChange1 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedData1(e.target.value); // Update selected data on dropdown change
  };

  const handleSelectChange2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedData2(e.target.value); // Update selected data for second dropdown
  };


  

  const datal1: Data[] = [
    {
      name: 'Jan',
      price: 1200,
      amt: 2000,
    },
    {
      name: 'Feb',
      price: 1100,
      amt: 2400,
    },
    {
      name: 'March',
      price: 800,
      amt: 2210,
    },
    {
      name: 'Apr',
      price: 600,
      amt: 2210,
    },
    {
      name: 'May',
      price: 1000,
      amt: 2290,
    },
    {
      name: 'June',
      price: 1280,
      amt: 2290,
    },
    {
      name: 'July',
      price: 1500,
      amt: 2000,
    },
    {
      name: 'Aug',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Sep',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Oct',
      price: 700,
      amt: 2181,
    },
    {
      name: 'Nov',
      price: 800,
      amt: 2500,
    },
    {
      name: 'Dec',
      price: 900,
      amt: 2100,
    },
  ];

  const datal2: Data[] = [
    {
      name: 'Jan',
      price: 1200,
      amt: 2000,
    },
    {
      name: 'Feb',
      price: 1600,
      amt: 2400,
    },
    {
      name: 'March',
      price: 1998,
      amt: 2210,
    },
    {
      name: 'Apr',
      price: 2098,
      amt: 2210,
    },
    {
      name: 'May',
      price: 1000,
      amt: 2290,
    },
    {
      name: 'June',
      price: 2050,
      amt: 2290,
    },
    {
      name: 'July',
      price: 1500,
      amt: 2000,
    },
    {
      name: 'Aug',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Sep',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Oct',
      price: 700,
      amt: 2181,
    },
    {
      name: 'Nov',
      price: 800,
      amt: 2500,
    },
    {
      name: 'Dec',
      price: 900,
      amt: 2100,
    },
  ];

  const datal3: Data[] = [
    {
      name: 'Jan',
      price: 200,
      amt: 2000,
    },
    {
      name: 'Feb',
      price: 600,
      amt: 2400,
    },
    {
      name: 'March',
      price: 998,
      amt: 2210,
    },
    {
      name: 'Apr',
      price: 1098,
      amt: 2210,
    },
    {
      name: 'May',
      price: 1080,
      amt: 2290,
    },
    {
      name: 'June',
      price: 1500,
      amt: 2290,
    },
    {
      name: 'July',
      price: 1500,
      amt: 2000,
    },
    {
      name: 'Aug',
      price: 1500,
      amt: 2000,
    },
    {
      name: 'Sep',
      price: 1200,
      amt: 2000,
    },
    {
      name: 'Oct',
      price: 900,
      amt: 2181,
    },
    {
      name: 'Nov',
      price: 600,
      amt: 2500,
    },
    {
      name: 'Dec',
      price: 900,
      amt: 2100,
    },
  ];

  const datal4: Data[] = [
    {
      name: 'Jan',
      price: 1200,
      amt: 2000,
    },
    {
      name: 'Feb',
      price: 1600,
      amt: 2400,
    },
    {
      name: 'March',
      price: 1998,
      amt: 2210,
    },
    {
      name: 'Apr',
      price: 2098,
      amt: 2210,
    },
    {
      name: 'May',
      price: 1000,
      amt: 2290,
    },
    {
      name: 'June',
      price: 2050,
      amt: 2290,
    },
    {
      name: 'July',
      price: 1500,
      amt: 2000,
    },
    {
      name: 'Aug',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Sep',
      price: 1100,
      amt: 2000,
    },
    {
      name: 'Oct',
      price: 700,
      amt: 2181,
    },
    {
      name: 'Nov',
      price: 800,
      amt: 2500,
    },
    {
      name: 'Dec',
      price: 900,
      amt: 2100,
    },
  ];

  const datal5: Data[] = [
    {
      name: 'Jan',
      price: 1150,
      amt: 2100,
    },
    {
      name: 'Feb',
      price: 1550,
      amt: 2350,
    },
    {
      name: 'March',
      price: 1980,
      amt: 2250,
    },
    {
      name: 'Apr',
      price: 2080,
      amt: 2250,
    },
    {
      name: 'May',
      price: 950,
      amt: 2360,
    },
    {
      name: 'June',
      price: 2010,
      amt: 2320,
    },
    {
      name: 'July',
      price: 1480,
      amt: 1920,
    },
    {
      name: 'Aug',
      price: 1120,
      amt: 2020,
    },
    {
      name: 'Sep',
      price: 1080,
      amt: 1980,
    },
    {
      name: 'Oct',
      price: 720,
      amt: 2150,
    },
    {
      name: 'Nov',
      price: 850,
      amt: 2450,
    },
    {
      name: 'Dec',
      price: 920,
      amt: 2050,
    },
  ];



  const datap1: Data2[]= [
    { name: 'Nitrogen', value: 20 },
    { name: 'Phosphorous', value: 10 },
    { name: 'Potassium', value: 15 },
    { name: 'Calcium', value: 25 },
    { name: 'Magnesium', value: 18},
  ];

  const datap2: Data2[]= [
    { name: 'Nitrogen', value: 15 },
    { name: 'Phosphorous', value: 12 },
    { name: 'Potassium', value: 18 },
    { name: 'Calcium', value: 20},
    { name: 'Magnesium', value: 10 },
  ];

  const datap3: Data2[]= [
    { name: 'Nitrogen', value: 10 },
    { name: 'Phosphorous', value: 8 },
    { name: 'Potassium', value: 12 },
    { name: 'Calcium', value: 15},
    { name: 'Magnesium', value: 8 },
  ];

  const datap4: Data2[]= [
    { name: 'Nitrogen', value: 18 },
    { name: 'Phosphorous', value: 14 },
    { name: 'Potassium', value: 20},
    { name: 'Calcium', value: 22},
    { name: 'Magnesium', value: 15},
  ];

  const datap5: Data2[]= [
    { name: 'Nitrogen', value: 12 },
    { name: 'Phosphorous', value: 6 },
    { name: 'Potassium', value: 10 },
    { name: 'Calcium', value: 10},
    { name: 'Magnesium', value: 5 },
  ];


  const data1 = [
    { month: 'January', rainfall: 75, profit: 55},
    { month: 'February', rainfall: 80, profit: 56 },
    { month: 'March', rainfall: 90, profit: 58},
    { month: 'April', rainfall: 100, profit: 60 },
    { month: 'May', rainfall: 110, profit: 62},
    { month: 'June', rainfall: 120, profit: 64 },
    { month: 'July', rainfall: 130, profit: 66 },
    { month: 'August', rainfall: 140, profit: 68 },
    { month: 'September', rainfall: 120, profit: 64 },
    { month: 'October', rainfall: 100, profit: 60 },
    { month: 'November', rainfall: 85, profit: 57 },
    { month: 'December', rainfall: 80, profit: 56 }
  ];


  const cropHealthData : ChartData[] = [
    {
      cropType: 'Wheat',
    pestResistance: 80,
    diseaseResistance: 85,
    climateTolerance: 70,
    nutrientUptake: 75,
    growthVigor: 90
    },
    {
      cropType: 'Corn',
      pestResistance: 75,
      diseaseResistance: 80,
      climateTolerance: 65,
      nutrientUptake: 70,
      growthVigor: 85
    },
    {
      cropType: 'Rice',
      pestResistance: 85,
      diseaseResistance: 90,
      climateTolerance: 75,
      nutrientUptake: 80,
      growthVigor: 88
    },
    {
      cropType: 'Barley',
      pestResistance: 78,
      diseaseResistance: 82,
      climateTolerance: 68,
      nutrientUptake: 73,
      growthVigor: 87,
    },
    {
      cropType: 'Soybean',
      pestResistance: 77,
      diseaseResistance: 83,
      climateTolerance: 69,
      nutrientUptake: 74,
      growthVigor: 86,
    },
    {
      cropType: 'Cotton',
      pestResistance: 76,
      diseaseResistance: 81,
      climateTolerance: 67,
      nutrientUptake: 72,
      growthVigor: 84,
    },
  ];

  

  const datam = [
    { name: 'Jan', corn: 1000, wheat: 850, rice: 1100, soybean: 950, barley: 1200 },
    { name: 'Feb', corn: 1250, wheat: 800, rice: 1150, soybean: 1050, barley: 1300 },
    { name: 'Mar', corn: 1050, wheat: 900, rice: 1180, soybean: 950, barley: 1120 },
    { name: 'Apr', corn: 1350, wheat: 920, rice: 1050, soybean: 1000, barley: 1150 },
    { name: 'May', corn: 1150, wheat: 1050, rice: 1200, soybean: 900, barley: 1100 },
    { name: 'Jun', corn: 1100, wheat: 1000, rice: 1150, soybean: 1050, barley: 1050 },
    { name: 'Jul', corn: 1050, wheat: 1100, rice: 1100, soybean: 950, barley: 1000 },
    { name: 'Aug', corn: 950, wheat: 1150, rice: 1000, soybean: 900, barley: 950 },
    { name: 'Sep', corn: 850, wheat: 1200, rice: 950, soybean: 850, barley: 900 },
    { name: 'Oct', corn: 800, wheat: 1250, rice: 900, soybean: 800, barley: 850 },
    { name: 'Nov', corn: 750, wheat: 1300, rice: 850, soybean: 750, barley: 800 },
    { name: 'Dec', corn: 700, wheat: 1350, rice: 800, soybean: 700, barley: 750 },
  ];
  
  let selectedChartData: Data[] = [];
  if (selectedData1 === 'data1') {
    selectedChartData = datal1;
  } else if (selectedData1 === 'data2') {
    selectedChartData = datal2;
  }
  else if (selectedData1 === 'data3') {
    selectedChartData = datal3;
  }
  else if (selectedData1 === 'data4') {
    selectedChartData = datal4;
  }
  else if (selectedData1 === 'data5') {
    selectedChartData = datal5;
  }
  else {
    selectedChartData = datal1;
  }

  let selectedChartData2: Data2[] = [];
  if (selectedData2 === 'data01') {
    selectedChartData2 = datap1;
  } else if (selectedData2 === 'data02') {
    selectedChartData2 = datap2;
  }
  else if (selectedData2 === 'data03') {
    selectedChartData2 = datap3;
  }
  else if (selectedData2 === 'data04') {
    selectedChartData2 = datap4;
  }
  else if (selectedData2 === 'data05') {
    selectedChartData2 = datap5;
  }
 else {
  selectedChartData2 = datap1;  
 }
  
 const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#FF6666'];


  return (
    <div className="h-screen py-0 flex flex-col pb-10 gap-12">
      <div className="flex-1 flex flex-col sm:flex-row gap-5">
        
        {/* Upper Left */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className='font-bold pb-5'>
        Plant Prices As Of 2023 (₹)
        </div>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart width={630} height={300} data={selectedChartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorprice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="price" stroke="#8884d8" fillOpacity={1} fill="url(#colorprice)" />
            </AreaChart>
          </ResponsiveContainer>
          <div className='pt-5'>
          <select className="select-box" value={selectedData1} onChange={handleSelectChange1}>
          <option value="data1">Tomato</option>
          <option value="data2">Potato</option>
          <option value="data3">Carrot</option>
          <option value="data4">Onion</option>
          <option value="data5">Maize</option>
          {/* Add more options for other datasets */}
        </select>
        </div>
        </div>

        {/* Upper Right */}
  
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className='font-bold pb-5'>
        Soil Nutrient Distribution
        </div>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart width={400} height={200}>
              <Pie data={selectedChartData2} dataKey="value" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
              {selectedChartData2.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
        </Pie>
            </PieChart>
          </ResponsiveContainer>
        <div className=''>
          <select className="select-box" value={selectedData2} onChange={handleSelectChange2}>
          <option value="data01">Alluvial</option>
          <option value="data02">Clayey</option>
          <option value="data03">Laterite</option>
          <option value="data04">Loamy</option>
          <option value="data05">Sandy</option>
          {/* Add more options for other datasets */}
        </select>
        </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className='font-bold pb-5'>
          Crop Production Rates
        </div>
        <ResponsiveContainer width="70%" height={400}>
      <LineChart data={datam}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="corn" name="Corn" stroke="#8884d8" />
        <Line type="monotone" dataKey="wheat" name="Wheat" stroke="#82ca9d" />
        <Line type="monotone" dataKey="rice" name="Rice" stroke="#ffc658" />
        <Line type="monotone" dataKey="corn" name="Corn" stroke="#8884d8" />
        <Line type="monotone" dataKey="wheat" name="Wheat" stroke="#82ca9d" />
        <Line type="monotone" dataKey="rice" name="Rice" stroke="#ffc658" />
        <Line type="monotone" dataKey="soybean" name="Soybean" stroke="#ff7300" />
        <Line type="monotone" dataKey="barley" name="Barley" stroke="#0088aa" />
      </LineChart>
    </ResponsiveContainer>
    </div>
      </div>

      <div className="flex-1 flex flex-col sm:flex-row sm:gap-96">
        {/* Lower Left */}
        <div className="flex-1 flex flex-col items-center justify-center">
        <div className='font-bold pb-5 pt-20'>
        Crop Health Graph (graded out of 100)
        </div>
          <ResponsiveContainer width="100%" height="100%">
          <BarChart width={600} height={400} data={cropHealthData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="cropType" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pestResistance" stackId="a" fill="#8884d8" name="Pest Resistance" />
      <Bar dataKey="diseaseResistance" stackId="a" fill="#82ca9d" name="Disease Resistance" />
      <Bar dataKey="climateTolerance" stackId="a" fill="#ffc658" name="Climate Tolerance" />
      <Bar dataKey="nutrientUptake" stackId="a" fill="#ff7300" name="Nutrient Uptake" />
      <Bar dataKey="growthVigor" stackId="a" fill="#de522f" name="Growth Vigor" />
    </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Lower Right */}
        <div className="flex-1 flex flex-col items-center justify-center">
        <div className='font-bold pb-5 pt-20'>
        Rainfall(mm) And Profit(%) Comparison
        </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={200}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rainfall" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              <Bar dataKey="profit" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;