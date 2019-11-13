import React from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';
import { connect } from 'react-redux';
import { requestRobots, handleFlip, handleFirstSelection, handleSecondSelection, handleMatchFound, handleMatchNotFound, resetSelections } from '../actions';
import './CardList.css';

class CardList extends React.Component {
    componentDidMount() {
        this.props.requestRobots();
    }
    getIsFlipped = (id) => {
        switch (id) {
            case 0: return this.props.isFlipped_0;
            case 1: return this.props.isFlipped_1;
            case 2: return this.props.isFlipped_2;
            case 3: return this.props.isFlipped_3;
            case 4: return this.props.isFlipped_4;
            case 5: return this.props.isFlipped_5;
            case 6: return this.props.isFlipped_6;
            case 7: return this.props.isFlipped_7;
            case 8: return this.props.isFlipped_8;
            case 9: return this.props.isFlipped_9;
            case 10: return this.props.isFlipped_10;
            case 11: return this.props.isFlipped_11;
            case 12: return this.props.isFlipped_12;
            case 13: return this.props.isFlipped_13;
            case 14: return this.props.isFlipped_14;
            case 15: return this.props.isFlipped_15;
            case 16: return this.props.isFlipped_16;
            case 17: return this.props.isFlipped_17;
            case 18: return this.props.isFlipped_18;
            case 19: return this.props.isFlipped_19;
            default: return 'Error';
        }
    }
    handleClick = (index, robotID) => {
        if (this.props.firstSelection === null) {
            this.props.handleFirstSelection(index, robotID);
            this.props.handleFlip(index);
        } else if (this.props.secondSelection === null) {
            if (this.props.firstSelection !== index) {
                this.props.handleSecondSelection(index, robotID);
                this.props.handleFlip(index);
            }
        } else if (this.props.secondSelection !== null) {
            if (this.props.firstRobotID === this.props.secondRobotID) {
                this.props.handleMatchFound();
                this.props.resetSelections();
            } else {
                this.props.handleMatchNotFound();
                this.props.handleFlip(this.props.firstSelection);
                this.props.handleFlip(this.props.secondSelection);
                this.props.resetSelections();
            }
        }
    }
    renderCards = () => {
        let arrOfCards = this.props.robots.map((robot,index) => {
            return (
                <ReactCardFlip 
                    isFlipped={this.getIsFlipped(index)}
                    flipSpeedBackToFront={0.8}
                    flipSpeedFrontToBack={0.8} 
                    flipDirection="horizontal" 
                    key={index}
                >
                    <CardFront onClick={() => this.handleClick(index, robot.id)} />
                    <CardBack 
                        robotName={robot.name} 
                        id={index} 
                        onClick={() => this.handleClick(index, robot.id)}
                    />
                </ReactCardFlip>
            );
        });
        let arrOfMatchedCards = this.props.robots.map((robot,index) => {
            return (
                <ReactCardFlip 
                    isFlipped={this.getIsFlipped(index+10)}
                    flipSpeedBackToFront={0.8}
                    flipSpeedFrontToBack={0.8}  
                    flipDirection="horizontal" 
                    key={index+10}
                >
                    <CardFront onClick={() => this.handleClick(index+10, robot.id)} />
                    <CardBack 
                        robotName={robot.name} 
                        id={index} 
                        onClick={() => this.handleClick(index+10, robot.id)}
                    />
                </ReactCardFlip>
            );
        }); 
        return <div>{[...arrOfCards, ...arrOfMatchedCards]}</div>;
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
        isFlipped_0: state.handleFlipReducer.isFlipped_0,
        isFlipped_1: state.handleFlipReducer.isFlipped_1,
        isFlipped_2: state.handleFlipReducer.isFlipped_2,
        isFlipped_3: state.handleFlipReducer.isFlipped_3,
        isFlipped_4: state.handleFlipReducer.isFlipped_4,
        isFlipped_5: state.handleFlipReducer.isFlipped_5,
        isFlipped_6: state.handleFlipReducer.isFlipped_6,
        isFlipped_7: state.handleFlipReducer.isFlipped_7,
        isFlipped_8: state.handleFlipReducer.isFlipped_8,
        isFlipped_9: state.handleFlipReducer.isFlipped_9,
        isFlipped_10: state.handleFlipReducer.isFlipped_10,
        isFlipped_11: state.handleFlipReducer.isFlipped_11,
        isFlipped_12: state.handleFlipReducer.isFlipped_12,
        isFlipped_13: state.handleFlipReducer.isFlipped_13,
        isFlipped_14: state.handleFlipReducer.isFlipped_14,
        isFlipped_15: state.handleFlipReducer.isFlipped_15,
        isFlipped_16: state.handleFlipReducer.isFlipped_16,
        isFlipped_17: state.handleFlipReducer.isFlipped_17,
        isFlipped_18: state.handleFlipReducer.isFlipped_18,
        isFlipped_19: state.handleFlipReducer.isFlipped_19,
        firstSelection: state.handleSelectionsReducer.firstSelection,
        secondSelection: state.handleSelectionsReducer.secondSelection,
        matches: state.matchReducer.matches,
        firstRobotID: state.handleSelectionsReducer.firstRobotID,
        secondRobotID: state.handleSelectionsReducer.secondRobotID
    }
}

export default connect(mapStateToProps, { requestRobots, handleFlip, handleFirstSelection, handleSecondSelection, handleMatchFound, handleMatchNotFound, resetSelections })(CardList);




/*
all cards isFlipped to false
each card needs id to know which card was clicked
    if clicked
        card flips until next card is clicked
            if match
                keep isFlipped for both cards true
            else
                flip both cards back down

state for each card (to know whether isflipped is true/false)
state for firstSelection and secondSelection
state for totalMatches
        
*/

