import React from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryBar } from 'victory';

const Dashboard = () => {
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 11 },
  ];

  const data1 = [
    { x: 2, y: 40 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 7 },
    { x: 5, y: 11 },
  ];

  const data2 = [
    { x: 'A', y: 10 },
    { x: 'B', y: 15 },
    { x: 'C', y: 8 },
    { x: 'D', y: 20 },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row h-1/2">
        <div className="w-1/2 h-full relative" style={{ background: '#f0f0f0'}}>
          <VictoryChart height={200}>
            <VictoryLine
              data={data}
              style={{
                data: { stroke: 'blue' }, // Change line color
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: 'green' }, // Change x-axis color
                tickLabels: { fill: 'green', fontSize: 8 }, // Adjust x-axis tick label styles
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'red' }, // Change y-axis color
                tickLabels: { fill: 'red', fontSize: 8 }, // Adjust y-axis tick label styles
              }}
            />
          </VictoryChart>
        </div>
        <div className="w-1/2 h-full relative" style={{ background: '#f0f0f0'}}>
          <VictoryChart height={200}>
            <VictoryLine
              data={data1}
              style={{
                data: { stroke: 'blue' }, // Change line color
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: 'green' }, // Change x-axis color
                tickLabels: { fill: 'green', fontSize: 8 }, // Adjust x-axis tick label styles
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'red' }, // Change y-axis color
                tickLabels: { fill: 'red', fontSize: 8 }, // Adjust y-axis tick label styles
              }}
            />
          </VictoryChart>
        </div>
      </div>
      <div className="flex flex-row h-1/2">
        <div className="w-1/2 h-full relative">
          <VictoryChart height={200}>
            <VictoryLine
              data={data1}
              style={{
                data: { stroke: 'orange' }, // Change line color
              }}
            />
            <VictoryAxis
              style={{
                axis: { stroke: 'green' }, // Change x-axis color
                tickLabels: { fill: 'green', fontSize: 8 }, // Adjust x-axis tick label styles
              }}
            />
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'red' }, // Change y-axis color
                tickLabels: { fill: 'red', fontSize: 8 }, // Adjust y-axis tick label styles
              }}
            />
          </VictoryChart>
        </div>
        <div className="w-1/2 h-full relative">
          <VictoryChart height={200}>
            <VictoryBar
              data={data2}
              style={{
                data: { fill: 'purple' }, // Change bar color
              }}
            />
          </VictoryChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
