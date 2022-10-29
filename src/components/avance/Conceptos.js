import React from "react";
import "../../styles/Conceptos.css";
import data from "../../data/concepts.json";
import styled from "styled-components";

const BarProgressGeneral = styled.div`
    width: 70%;
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

const Conceptos = ({ handleClick }) => {
    // el siguiente bucle y array me permiten generar elementos jsx de forma automatica segun el tamaño de los datos
    let arrConcepts = [];

    const moneda = Intl.NumberFormat("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    for (let keys in data) {
        arrConcepts.push(
            <div
                id={keys}
                key={keys}
                className='item-avance'
                onClick={handleClick}>
                <div className='concept'>{keys}</div>
                <div className='actual'>Actual</div>
                <div className='metaGeneral'>Meta</div>
                <div className='barraAvance'>
                    <BarProgressGeneral
                        percentaje={data[keys].general.percentaje}
                    />
                </div>
                <div className='actualNumber'>
                    <span>{moneda.format(data[keys].general.avance)}</span>
                </div>
                <div className='metaNumber'>
                    <span>{moneda.format(data[keys].general.meta)}</span>
                </div>
                <div className='proximos'>proximos</div>
                <div className='subconcepto1'>
                    <span>{data[keys].general.prox[0].name}</span>
                </div>
                <div className='cirbar1'></div>
                <div className='price1'>
                    <span>{data[keys].general.prox[0].meta}</span>
                </div>
                <div className='subconcepto2'>
                    <span>{data[keys].general.prox[1].name}</span>
                </div>
                <div className='cirbar2'></div>
                <div className='price2'>
                    <span>{data[keys].general.prox[1].meta}</span>
                </div>
            </div>
        );
    }

    return <div className='all-conceptos'>{arrConcepts}</div>;
};

export default Conceptos;
