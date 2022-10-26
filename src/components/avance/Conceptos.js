import React from "react";
import "../../styles/Conceptos.css";

const Conceptos = ({ handleClick }) => {
    return (
        <div className='all-conceptos'>
            <div id='fresado' className='item-avance' onClick={handleClick}>
                <div className='concept'>
                    <h2>Fresado</h2>
                </div>
                <div className='avance'>
                    <p>Avance</p>
                </div>
                <div className='actual'>
                    <p>Actual</p>
                </div>
                <div className='meta'>
                    <p>Meta</p>
                </div>
                <div className='barraAvance'></div>
                <div className='actualNumber'></div>
                <div className='metaNumber'></div>
                <div className='subconcepto1'></div>
                <div className='cirBar1'></div>
                <div className='price1'></div>
                <div className='price1'></div>
            </div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
            <div className='item-avance'></div>
        </div>
    );
};

export default Conceptos;
