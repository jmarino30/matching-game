import React from 'react';
import './CardList.css';

const CardBack = (props) => {
    return (
        <div className='card tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 fl w-100'>
            <div className='cardBack' onClick={props.onClick}>
                <img height="auto" src={`https://robohash.org/${props.id}?size=100x100`} alt='robot'/>
                <br/>
                {props.robotName}
            </div>
        </div>
    );
}

export default CardBack;