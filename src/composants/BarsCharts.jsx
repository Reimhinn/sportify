import React, { useState, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import '../styles/BarsCharts.css';
import { useParams } from "react-router-dom";
import Api from "../services/api";


export function BarsCharts() {

  const [data, setData] = useState([])

  let { id } = useParams();

  useEffect(() => {
      fetchUserActivity();
  }, []);

  const fetchUserActivity = async () => {
      const dataFetched = await Api.getUserActivity(id);
      setData(dataFetched);
  };

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
        data={data.data ? data.data.sessions : ""}
        margin={{
          top: 40,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barGap={12}
      >
        <CartesianGrid strokeDasharray="2 2" horizontalPoints={['15%', '50%']} vertical={false}/>
        <XAxis dataKey={(_, index) => index} tickFormatter={(value, index) => index + 1} tickMargin={22} tickSize={0} tick={{ fill:'#9B9EAC' }} width={100} />
        <YAxis yAxisId="left" orientation='left' hide />
        <YAxis yAxisId="right" orientation='right' domain={['dataMin - 1', 'dataMax']} tickCount={3} tickLine={false} tickMargin="40" axisLine={false} tick={{ fill:'#9B9EAC' }}  />
        <Tooltip content={<CustomTooltip />} offset={80} wrapperStyle={{ outline: 'none' }} />
  
        <Bar dataKey="kilogram" fill="black" yAxisId="right" barSize={10} radius={[5, 5, 0, 0]} />
        <Bar dataKey="calories" fill="red" yAxisId="left"  barSize={10} radius={[5, 5, 0, 0]} /> 


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