import "./App.css";
import NavX from "./composants/NavX";
import NavY from "./composants/NavY";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChoicePage from "./pages/ChoicePage";
import MaintenancePage from "./pages/MaintenancePage";

function App() {
  
    return (
        <div id="App">
            <Router>
                <nav>
                    <NavX />
                    <NavY />
                </nav>
                <Routes>
                    <Route path="/" element={<ChoicePage />} />
                    <Route path=":id" element={<MainPage />} />
                    <Route path=":id" element={<MainPage />} />
                    <Route path="/soon" element={<MaintenancePage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
