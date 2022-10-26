import React from "react";
import "../../styles/Conceptos.css";
import data from "../../data/concepts.json";

const Conceptos = ({ handleClick }) => {
    let arrConcepts = [];
    for (let keys in data) {
        arrConcepts.push(
            <div id={keys} className='item-avance' onClick={handleClick}></div>
        );
    }

    return (
        <div className='all-conceptos'>
            {/* <div
                id='fresado'
                className='item-avance'
                onClick={handleClick}></div> */}
            {arrConcepts}
        </div>
    );
};

export default Conceptos;
