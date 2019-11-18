import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { connect } from 'react-redux';
import { requestRobots, handleFlip, setNumberOfCards, resetActiveCards, createInitialIsFlippedState, createInitialIsMatchedState, handleMatchFound, storePreviousCard, setPending } from '../actions';
import './CardList.css';

class CardList extends React.Component {
    componentDidMount() {
        this.props.setNumberOfCards();
        this.props.requestRobots(this.props.numOfCards);
        this.props.createInitialIsFlippedState(this.props.numOfCards);
        this.props.createInitialIsMatchedState(this.props.numOfCards);
    }
    handleClick = (index, robotId) => {
        //check if card is already matched or previous card
        if (!this.props.isMatched[index] && !this.props.previousCard.pending) {
            if (this.props.previousCard.id === null) {
                this.props.handleFlip(index);
                this.props.storePreviousCard(index, robotId);
            } else { 
                //make sure you can't click same card
                if (this.props.previousCard.index !== index) {
                    this.props.handleFlip(index);
                    //if cards match
                    if (this.props.previousCard.id === robotId) {
                        this.props.handleMatchFound(this.props.previousCard.index, index);
                        this.props.resetActiveCards(this.props.previousCard.index, index);
                    } else {
                        //if cards do not match
                        this.props.setPending(true);
                        setTimeout( () => {
                            this.props.handleFlip(this.props.previousCard.index);
                            this.props.handleFlip(index);
                            this.props.resetActiveCards(this.props.previousCard.index, index);
                            }, 
                        2000);
                    }
                }
            }
        }
    }
    renderCards = () => {
        let arrOfCards = this.props.robots.map((robot,index) => {
            return (
                <div className={this.props.isMatched[index] ? "scene scene--card grow border" : "scene scene--card grow"} key={index}>
                    <div className={this.props.isFlipped[index] ? "card shadow-5 is-flipped" : "card shadow-5"}>
                        <div className="card__face card__face--front">
                            <CardFront onClick={() => this.handleClick(index, robot.email)} />
                        </div>
                        <div className="card__face card__face--back">
                            <CardBack 
                                robotName={robot.name.first} 
                                id={robot.email}
                                onClick={() => this.handleClick(index, robot.email)}
                            />
                        </div>
                    </div>
                </div>
            );
        });
        /*
        let arrOfMatchedCards = this.props.robots.map((robot,index) => {
            return (
                <div className={this.props.isMatched[index] ? "scene scene--card grow border" : "scene scene--card grow"} key={index+10}>
                    <div className={this.props.isFlipped[index+10] ? "card shadow-5 is-flipped" : "card shadow-5"}>
                        <div className="card__face card__face--front">
                            <CardFront onClick={() => this.handleClick(index+10, robot.id)} />
                        </div>
                        <div className="card__face card__face--back">
                            <CardBack 
                                robotName={robot.name} 
                                id={robot.id} 
                                onClick={() => this.handleClick(index+10, robot.id)}
                            />
                        </div>
                    </div>
                </div>
            );
        }); 
        */
        return <div>{arrOfCards}</div>; 
    }
    render() {
        return (
            <div className="mw9 center ph3-ns">
                <div className="cf ph2-ns">
                    {this.renderCards()}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        robots: state.requestRobots.robots,
        isFlipped: state.handleIsFlipReducer.isFlipped,
        isMatched: state.handleMatchesReducer.isMatched,
        previousCard: state.handleActiveCardsReducer.previousCard,
        numOfCards: state.handleNumberOfCards.numOfCards
    }
}

export default connect(mapStateToProps, { requestRobots, handleFlip, setNumberOfCards, resetActiveCards, createInitialIsFlippedState, createInitialIsMatchedState, handleMatchFound, storePreviousCard, setPending })(CardList);

