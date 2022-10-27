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
            {/* los dos contenedores siguientes me permiten desaparecer o aparecer segun el estado de este si 
            no es presionado nada el valor de whatConcepto es "" pero si es presionado algun concepto el valor 
            de esta variable de estado sera el valor del concepto presionado */}
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
