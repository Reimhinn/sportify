import "./App.css";
import NavX from "./composants/NavX";
import NavY from "./composants/NavY";
import Header from "./composants/Header";
import BarsChartsContainer from "./composants/BarsChartsContainer";
import LineCharts from "./composants/LineCharts";
import RadarCharts from "./composants/RadarCharts";
import GaugeCharts from "./composants/GaugeCharts";
import MacroCards from "./composants/MacroCards";

function App() {
    const calories = "1,930kCal";
    const protéines = "155g";
    const glucides = "290g";
    const lipides = "50g";

    return (
        <div id="App">
            <nav>
                <NavX />
                <NavY />
            </nav>
            <div id="wrapper">
                <Header />
                <main>
                    <section id="left-side">
                        <BarsChartsContainer />
                        <section id="bottom-graphs">
                            <LineCharts />
                            <RadarCharts />
                            <GaugeCharts />
                        </section>
                    </section>
                    <section id="right-side">
                        <MacroCards
                            macroName="Calories"
                            macroData={calories}
                            color="rgba(255, 0, 0, 0.1)"
                        />
                        <MacroCards
                            macroName="Protéines"
                            macroData={protéines}
                            color="rgba(74, 184, 255, 0.1)"
                        />
                        <MacroCards
                            macroName="Glucides"
                            macroData={glucides}
                            color="rgba(249, 206, 35, 0.1)"
                        />
                        <MacroCards
                            macroName="Lipides"
                            macroData={lipides}
                            color="rgba(253, 81, 129, 0.1)"
                        />
                    </section>
                </main>
            </div>
        </div>
    );
}

export default App;
