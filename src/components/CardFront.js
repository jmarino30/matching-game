import React from 'react';
import './CardList.css';
import cardImg from '../img/CardBack.png';

const CardFront = (props) => {
    return (
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl w-100'
        onClick={props.onClick} >
            <img src={cardImg} alt='card' />
        </div>
    );
}

export default CardFront;
