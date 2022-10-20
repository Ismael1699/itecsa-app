import React, { useEffect, useState } from "react";
import Content from "./components/Content";
import Nav from "./components/nav/Nav";
import "./App.css";
import TopBarWeb from "./components/topbar/TopBarWeb";

function App() {
    const [displayWidth, setDisplayWidth] = useState(window.innerWidth);
    const [loadPage, setLoadPage] = useState("home");
    const [areaNamesData, setAreaNamesData] = useState([
        "home",
        "hola",
        "hora",
        "hay",
        "dashboard",
        "day",
        "daily",
        "derevil",
        "dos",
        "avance",
        "abra",
        "avanlo",
        "avion",
        "avioacion",
        "estimaciones",
        "eso",
        "esos",
        "esontato",
        "diesel",
        "dia",
        "dialorgar",
        "diatono",
    ]);

    const getDisplaySize = () => {
        setDisplayWidth(window.innerWidth);
    };

    const homePage = () => {
        setLoadPage("home");
    };

    const dashBoardPage = () => {
        setLoadPage("dashboard");
    };

    const avancePage = () => {
        setLoadPage("avance");
    };

    const estimacionesPage = () => {
        setLoadPage("estimaciones");
    };

    const dieselPage = () => {
        setLoadPage("diesel");
    };

    const handleSearch = (text) => {
        switch (text) {
            case "home":
                homePage();
                break;
            case "dashboard":
                dashBoardPage();
                break;
            case "avance":
                avancePage();
                break;
            case "estimaciones":
                estimacionesPage();
                break;
            case "diesel":
                dieselPage();
                break;
        }
    };

    //Con este useEffect se obtine el ancho de la pantalla en todo el tiempo de ejecución del proyecto
    useEffect(() => {
        window.addEventListener("resize", getDisplaySize);
    });
    return (
        <div className='background'>
            <div id='container-nav'>
                <Nav
                    displayWidth={displayWidth}
                    homePage={homePage}
                    dashBoardPage={dashBoardPage}
                    avancePage={avancePage}
                    estimacionesPage={estimacionesPage}
                    dieselPage={dieselPage}
                    loadPage={loadPage}
                />
            </div>
            <div id='container-section'>
                {displayWidth > 600 ? (
                    <TopBarWeb
                        areaNamesData={areaNamesData}
                        handleSearch={handleSearch}
                    />
                ) : (
                    <></>
                )}
                <Content loadPage={loadPage} />
            </div>
        </div>
    );
}

export default App;
