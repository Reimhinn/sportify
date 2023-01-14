import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../styles/GaugeCharts.css'

const data = [
  {
    name: '50+',
    uv: 0.1,
    pv: 1000,
  },
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

function GaugeCharts() {
  return (
    <div className='bottom-cards'>
      <ResponsiveContainer width="100%" aspect={1}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="1000%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            fill='var(--primary)'
            minAngle={15}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default GaugeCharts