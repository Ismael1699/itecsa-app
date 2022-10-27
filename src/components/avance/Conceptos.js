import React from "react";
import "../../styles/Conceptos.css";
import data from "../../data/concepts.json";

const Conceptos = ({ handleClick }) => {
    let arrConcepts = [];
    for (let keys in data) {
        arrConcepts.push(
            <div
                id={keys}
                key={keys}
                className='item-avance'
                onClick={handleClick}>
                {keys}
            </div>
        );
    }

    return <div className='all-conceptos'>{arrConcepts}</div>;
};

export default Conceptos;
