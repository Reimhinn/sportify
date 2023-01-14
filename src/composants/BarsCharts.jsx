import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/BarsCharts.css';


const data = [
  {
    name: '1',
    Calories: 4000,
    Poids: 89,
    amt: 2400,
  },
  {
    name: '2',
    Calories: 3000,
    Poids: 88,
    amt: 2210,
  },
  {
    name: '3',
    Calories: 2000,
    Poids: 85,
    amt: 2290,
  },
  {
    name: '4',
    Calories: 2780,
    Poids: 91,
    amt: 2000,
  },
  {
    name: '5',
    Calories: 1890,
    Poids: 89,
    amt: 2181,
  },
  {
    name: '6',
    Calories: 2390,
    Poids: 88,
    amt: 2500,
  },
  {
    name: '7',
    Calories: 3490,
    Poids: 90,
    amt: 2100,
  },
];

export function BarsCharts() {

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div id="custom-tooltip">
          <p id="tooltip-kg">{`${payload[0].value}kg`}</p>
          <p id="tooltip-kCal">{`${payload[1].value}kCal`}</p>
        </div>
      );
    }
  }

  CustomTooltip.propTypes = {
    active: PropTypes.any,
    payload: PropTypes.any,
  };

  return (
    <ResponsiveContainer width="100%" height="80%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barGap={12}
      >
        <CartesianGrid strokeDasharray="2 2" horizontalPoints={['15%', '50%']} vertical={false}/>
        <XAxis dataKey="name" tickMargin={22} tickSize={0} tick={{ fill:'#9B9EAC' }} width={100} />
        <YAxis yAxisId="left" orientation='left' hide />
        <YAxis yAxisId="right" orientation='right' domain={['dataMin - 1', 'dataMax + 1']} tickCount={3} tickLine={false} tickMargin="40" axisLine={false} tick={{ fill:'#9B9EAC' }}  />
        <Tooltip content={<CustomTooltip />} offset={80} wrapperStyle={{ outline: 'none' }} />
  
        <Bar dataKey="Poids" fill="black" yAxisId="right" barSize={10} radius={[5, 5, 0, 0]} />
        <Bar dataKey="Calories" fill="red" yAxisId="left"  barSize={10} radius={[5, 5, 0, 0]} /> 


      </BarChart>
    </ResponsiveContainer>
  );
}

  // content={<BarsCustomTooltip payload={data} />}

  // function BarsCustomTooltip({ payload, label }) {
  //     {
  //     if (payload.length) {
  //       return (
  //         <div style={{ width:'3.5vw' }}>
  //           <ul style={{ listStyleType: 'none' }}>
  //             {payload.map((entry, index) => (
  //               <li key={`item-${index}`}>
  //                 {entry.name}: {entry.value}
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       );
  //     }
  //     return null;
  //   }}