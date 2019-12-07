import React from 'react';
import './CardList.css';
import cardImg from '../img/CardBack.png';

const CardFront = (props) => {
  return (
    <div onClick={props.onClick} >
      <img src={cardImg} alt='card' />
    </div>
  );
}

export default CardFront;
