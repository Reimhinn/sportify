import React, { useState, useEffect } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { useParams } from "react-router-dom";
import Api from "../services/api";

// const data = [
//   {
//     subject: 'Intensité',
//     A: 120,
//     B: 110,
//   },
//   {
//     subject: 'Vitesse',
//     A: 200,
//     B: 130,
//   },
//   {
//     subject: 'Force',
//     A: 86,
//     B: 130,
//   },
//   {
//     subject: 'Endurance',
//     A: 99,
//     B: 100,
//   },
//   {
//     subject: 'Energie',
//     A: 85,
//     B: 90,
//   },
//   {
//     subject: 'Cardio',
//     A: 65,
//     B: 85,
//   },
// ];

function RadarCharts() {

  const [datas, setDatas] = useState([])

  let { id } = useParams();

  useEffect(() => {
      fetchUserPerformance();
  }, []);

  const fetchUserPerformance = async () => {
      const dataFetched = await Api.getUserPerformance(id);
      setDatas(dataFetched);
      console.log(dataFetched)
  };


  return (
    <div className='bottom-cards'>
      <ResponsiveContainer  width="100%" aspect={1}>
        <RadarChart cx="50%" cy="50%" outerRadius="50%" innerRadius={50} data={datas.data ? datas.data.data : ""} >
          <PolarGrid axisLine={false} radialLines={false} stroke="white"
        strokeWidth={1.5} polarRadius={[10, 20, 50, 80 ,110]} />
          <PolarAngleAxis  dataKey="kind" tickSize={40} tick={{ fill: "white", fontSize: 15 }} tickFormatter={(value) => {
                            const kinds = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
                            return kinds[value-1];
                          }} />
          <PolarRadiusAxis  tickCount={6} tick={false} axisLine={false} />
          <Radar dataKey="value"
           fill="var(--primary)" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default RadarCharts