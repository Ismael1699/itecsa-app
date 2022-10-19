import React from "react";
import "../../styles/Fresado.css";

const Fresado = ({ handleBack }) => {
    return (
        <div className='container-fresado'>
            <button onClick={handleBack}>{"Back"}</button>
            <button>SubConceptos</button>
            <button>Vista por dia </button>
            <button>Vista por mes</button>
            <p>fresado</p>
        </div>
    );
};

export default Fresado;
