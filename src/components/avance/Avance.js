import React, { useState } from "react";
import "../../styles/Avance.css";
import Conceptos from "./Conceptos";
import Subconceptos from "./Subconceptos";

const Avance = () => {
    const [whatConcepto, setWhatConcepto] = useState("");

    const handleClick = (e) => {
        setWhatConcepto(e.target.id);
        console.log(e.target.id);
    };

    const handleBack = () => {
        setWhatConcepto("");
    };

    return (
        <div className='container-avance'>
            {whatConcepto.length > 0 ? (
                <Subconceptos
                    handleBack={handleBack}
                    whatConcepto={whatConcepto}
                />
            ) : (
                ""
            )}
            {whatConcepto === "" ? <Conceptos handleClick={handleClick} /> : ""}
        </div>
    );
};

export default Avance;
