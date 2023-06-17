import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { observer } from "mobx-react-lite";
import { Context } from "./index";
import { check } from "./http/userAPI";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const App = observer ( () => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    console.log(user)

    useEffect(() => {
        check().then(data => {
            user.setUser(user);
            user.setIsAuth(true);
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (
            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
        )
    }

    return (
        <div className="container wrapper">
            <Router>
                <NavBar />
                <AppRouter />
                <Footer />
            </Router>
        </div>
    );
});

export default App;
