import React from "react";
import "../../styles/Fresado.css";
import data from "../../data/concepts.json";

const Fresado = ({ handleBack }) => {
    return (
        <div className='container-fresado'>
            <div className='container-header'>
                <button onClick={handleBack}>{"Back"}</button>
                <button>SubConceptos</button>
                <button>Vista por dia </button>
                <button>Vista por mes</button>
                <h1>Fresado</h1>
            </div>
            <div className='data-container'>
                {data.concepts[0].fresado.map((item) => {
                    return (
                        <div className='data-concept'>
                            <div className='name'>{item.name}</div>
                            <div className='meta'>
                                <p>Meta</p>
                            </div>
                            <div className='metaNumber'>{item.import}</div>
                            <div className='price'>
                                {item.price.toLocaleString("en")}
                            </div>
                            <div className='barProgres'>{item.percetanje}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Fresado;
