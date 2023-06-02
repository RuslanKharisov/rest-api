import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
        <NavBar />
        <div className="container">            
            <Router>
                <AppRouter />
            </Router>
        </div>
        <Footer /> 
        </>
    );
};

export default App;
