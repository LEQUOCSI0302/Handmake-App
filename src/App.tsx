import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage.tsx";

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gioi-thieu" element={<AboutPage />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;