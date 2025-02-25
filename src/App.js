import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingPage";
import Test from "./components/test";

export default function App() {
    return (
        <Router>
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/parcours" element={<Test />} />
                </Routes>
            </>
        </Router>
    );
}
