import React from "react";
import "../../styles/Fresado.css";
import data from "../../data/concepts.json";

const Fresado = ({ handleBack }) => {
    return (
        <div className='container-fresado'>
            <button onClick={handleBack}>{"Back"}</button>
            <button>SubConceptos</button>
            <button>Vista por dia </button>
            <button>Vista por mes</button>
            <h1>Fresado</h1>
            <table className='data-table'>
                <tr>
                    <th>SubConceptos</th>
                    <th>Unidad</th>
                    <th>Precio</th>
                    <th>Importe</th>
                    <th>Avance</th>
                </tr>
                <tr>
                    <td>{data.concepts[0].fresado[0].name}</td>
                    <td>{data.concepts[0].fresado[0].unity}</td>
                    <td>{data.concepts[0].fresado[0].price}</td>
                    <td>{data.concepts[0].fresado[0].import}</td>
                    <td>{data.concepts[0].fresado[0].percetanje}</td>
                </tr>
            </table>
        </div>
    );
};

export default Fresado;
