import React from "react";
import "../../styles/Conceptos.css";
import data from "../../data/concepts.json";

const Conceptos = ({ handleClick }) => {
    // el siguiente bucle y array me permiten generar elementos jsx de forma automatica segun el tamaño de los datos
    let arrConcepts = [];
    for (let keys in data) {
        arrConcepts.push(
            <div
                id={keys}
                key={keys}
                className='item-avance'
                onClick={handleClick}>
                <div className='concept'>{keys}</div>
                <div className='avance'>Avance</div>
                <div className='actual'>Actual</div>
                <div className='meta'>Meta</div>
                <div className='barraAvance'>
                    barra {data[keys].general.percentaje}
                </div>
                <div className='actualNumber'>{data[keys].general.avance}</div>
                <div className='metaNumber'>{data[keys].general.meta}</div>
            </div>
        );
    }

    return <div className='all-conceptos'>{arrConcepts}</div>;
};

export default Conceptos;
