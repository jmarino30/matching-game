import React, {useEffect} from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { connect } from 'react-redux';
import { requestRobots, handleFlip, resetActiveCards, createInitialIsFlippedState, createInitialIsMatchedState, handleMatchFound, storePreviousCard, setPending } from '../actions';

const CardList = props => {
  useEffect( () => {
    props.startNewGame(20);
  },[]);
  const handleClick = (index, robotId) => {
    //check if card is already matched or previous card
    if (!props.isMatched[index] && !props.previousCard.pending) {
      if (props.previousCard.id === null) {
        props.handleFlip(index);
        props.storePreviousCard(index, robotId);
      } else { 
        //make sure you can't click same card
        if (props.previousCard.index !== index) {
          props.handleFlip(index);
          //if cards match
          if (props.previousCard.id === robotId) {
              props.handleMatchFound(props.previousCard.index, index);
              props.resetActiveCards(props.previousCard.index, index);
          } else {
            //if cards do not match
            props.setPending(true);
            setTimeout( () => {
              props.handleFlip(props.previousCard.index);
              props.handleFlip(index);
              props.resetActiveCards(props.previousCard.index, index);
            }, 2000);
          }
        }
      }
    }
  };
  const renderCards = () => {
    let arrOfCards = props.robots.map((robot,index) => {
      return (
        <div className={props.isMatched[index] ? "scene scene--card grow border" : "scene scene--card grow"} key={index}>
          <div className={props.isFlipped[index] ? "card shadow-5 is-flipped" : "card shadow-5"}>
            <div className="card__face card__face--front">
              <CardFront onClick={() => handleClick(index, robot.email)} />
            </div>
            <div className="card__face card__face--back">
              <CardBack 
                robotName={robot.name.first} 
                id={robot.email}
                deckSet={props.deckSet}
                width={props.width}
                onClick={() => handleClick(index, robot.email)}
              />
            </div>
          </div>
       </div>
      );
    });
    return <div>{arrOfCards}</div>; 
  };
  return (
    <div className="mw9 center ph3-ns">
      <div className="cf ph2-ns">
        {renderCards()}
      </div>
    </div>
  );
}
const mapStateToProps = state => {
    return {
        robots: state.requestRobots.robots,
        isFlipped: state.handleIsFlipReducer.isFlipped,
        isMatched: state.handleMatchesReducer.isMatched,
        previousCard: state.handleActiveCardsReducer.previousCard,
        deckSet: state.deckSetReducer.deckSet,
        width: state.windowWidthReducer.width
    }
}

export default connect(mapStateToProps, { requestRobots, handleFlip, resetActiveCards, createInitialIsFlippedState, createInitialIsMatchedState, handleMatchFound, storePreviousCard, setPending })(CardList);

