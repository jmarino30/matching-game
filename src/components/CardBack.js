import React from 'react';
import './CardList.css';

const CardBack = (props) => {
    return (
        <div onClick={props.onClick}>
            <img height="auto" 
                src={window.innerWidth > 600 ?
                `https://robohash.org/${props.id}?size=120x120` :
                `https://robohash.org/${props.id}?size=60x60`} 
                alt='robot'/>
            <div className="card-text">
                {window.innerWidth > 600 ? props.robotName : ''}
            </div>
        </div>
    );
}

export default CardBack;