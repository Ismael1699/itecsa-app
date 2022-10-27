import React from "react";
import "../../styles/Subconceptos.css";
import data from "../../data/concepts.json";
import styled from "styled-components";

const BarProgress = styled.div`
    width: 60%;
    height: 30%;
    background-color: #6b554a;
    overflow: hidden;
    border-radius: 10px;
    &::before {
        content: "";
        display: block;
        width: ${(props) => "" + props.percentaje}%;
        height: 100%;
        background-color: #2fff24;
        z-index: 3;
        border-radius: 10px;
    }
`;

const SubConceptos = ({ handleBack, whatConcepto }) => {
    console.log(whatConcepto);
    return (
        <div className='container-fresado'>
            {/* div para la informacion del encabezado del concepto generado */}
            <div className='container-header'>
                <button onClick={handleBack}>{"Back"}</button>
                <button>SubConceptos</button>
                <button>Vista por dia </button>
                <button>Vista por mes</button>
                <h1>Fresado</h1>
            </div>
            {/* div para la generacion automatica de cada subconceptos */}
            <div className='data-container'>
                {data[whatConcepto].subconceptos.map((item, key) => {
                    return (
                        <div className='data-concept' key={key + 1}>
                            <div className='name'>{item.name}</div>
                            <div className='meta'>
                                <p>Meta</p>
                            </div>
                            <div className='metaImport'>{item.import}</div>
                            <div className='metaVol'>
                                {item.vol.toLocaleString("es-MX")} m<sup>3</sup>
                            </div>
                            <div className='namePrice'>Precio por unidad</div>
                            <div className='price'>
                                {Intl.NumberFormat("es-MX", {
                                    style: "currency",
                                    currency: "MXN",
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                }).format(item.price)}
                            </div>
                            <div className='barProgres'>
                                <BarProgress percentaje={item.percetanje} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SubConceptos;
