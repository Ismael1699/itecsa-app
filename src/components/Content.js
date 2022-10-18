import React from "react";
import "../styles/Content.css";
import Home from "./Home.js";
import DashBoard from "./DashBoard.js";
import Avance from "./avance/Avance.js";
import Estimaciones from "./Estimaciones.js";
import Diesel from "./Diesel.js";

const Content = ({ loadPage }) => {
    return (
        <div id='content-container'>
            {
                {
                    home: <Home />,
                    dashboard: <DashBoard />,
                    avance: <Avance />,
                    estimaciones: <Estimaciones />,
                    diesel: <Diesel />,
                }[loadPage]
            }
        </div>
    );
};

export default Content;
