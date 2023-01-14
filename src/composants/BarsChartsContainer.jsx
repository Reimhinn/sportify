import React from 'react'
import '../styles/BarsChartsContainer.css'
import { BarsCharts } from './BarsCharts'

function BarsChartsContainer () {
  return (
    <div id='bars-charts-container'>
        <header>
            <h2 >Activité quotidienne</h2>
            <ul>
                <li>Poids (kg)</li>
                <li>Calories brûlées (kCal)</li>
            </ul>
        </header>
        <BarsCharts />
        
    </div>
  )
}

export default BarsChartsContainer