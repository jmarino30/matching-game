import React from 'react';
import './CardList.css';

const CardBack = props => {
    return (
        <div onClick={props.onClick}>
            <img height="auto" 
                src={window.innerWidth > 600 ?
                `https://robohash.org/${props.id}?size=100x100&set=set${props.deckSet}` :
                `https://robohash.org/${props.id}?size=60x60&set=set${props.deckSet}`} 
                alt='robot'/>
            <div className="card-text">
                {props.robotName}
            </div>
        </div>
    );
}

export default CardBack;