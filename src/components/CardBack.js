import React from 'react';
import './CardList.css';

const CardBack = props => {
  return (
    <div onClick={props.onClick}>
      <img height="auto" 
        src={`https://robohash.org/${props.id}?set=set${props.deckSet}`} 
        alt='robot'/>
      <div className="card-text">
        {props.robotName}
      </div>
    </div>
  );
}

export default CardBack;