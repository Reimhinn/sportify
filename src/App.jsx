import { useState } from 'react'
import './App.css'
import NavX from './composants/NavX'
import NavY from './composants/NavY'
import Header from './composants/Header'
import BarsChartsContainer from './composants/BarsChartsContainer'
import LineCharts from './composants/LineCharts'
import RadarCharts from './composants/RadarCharts'
import GaugeCharts from './composants/GaugeCharts'
import MacroCards from './composants/MacroCards'

function App() {

  return (
    <div id="App">
      <nav>
        <NavX />
        <NavY />
      </nav>
      <div id='wrapper'>
        <Header />
        <main>
          <section id='left-side'>
            <BarsChartsContainer />
            <section id='bottom-graphs'>
              <LineCharts />
              <RadarCharts />
              <GaugeCharts />
            </section>
          </section>
          <section id='right-side'>
            <MacroCards />
            <MacroCards />
            <MacroCards />
            <MacroCards />
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
