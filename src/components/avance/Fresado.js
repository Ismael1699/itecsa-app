import React from "react";
import "../../styles/Fresado.css";
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
        background-color: #00ad34;
        z-index: 3;
        border-radius: 10px;
    }
`;

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

export default Fresado;
