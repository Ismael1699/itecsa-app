import React, { useEffect } from "react";
import NavMobile from "./NavMobile";
import NavWeb from "./NavWeb";

const Nav = ({
    displayWidth,
    homePage,
    dashBoardPage,
    avancePage,
    estimacionesPage,
    dieselPage,
    loadPage,
}) => {
    return (
        <>
            {displayWidth > 600 ? (
                <NavWeb
                    homePage={homePage}
                    dashBoardPage={dashBoardPage}
                    avancePage={avancePage}
                    estimacionesPage={estimacionesPage}
                    dieselPage={dieselPage}
                    loadPage={loadPage}
                />
            ) : (
                <NavMobile
                    homePage={homePage}
                    dashBoardPage={dashBoardPage}
                    avancePage={avancePage}
                    estimacionesPage={estimacionesPage}
                    dieselPage={dieselPage}
                    loadPage={loadPage}
                />
            )}
        </>
    );
};

export default Nav;
