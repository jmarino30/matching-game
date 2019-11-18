import React from 'react';
import CardList from './CardList';
import Labels from './Labels';
import {connect} from 'react-redux';
import { setNumberOfCards, requestRobots, createInitialIsMatchedState, createInitialIsFlippedState} from '../actions';


class App extends React.Component {

    startNewGame = (numOfCards) => {
        this.props.setNumberOfCards(numOfCards);
        this.props.requestRobots(numOfCards);
        this.props.createInitialIsFlippedState(numOfCards);
        this.props.createInitialIsMatchedState(numOfCards);
    }
    
    render() {
        return (
            <div>
                <h1 className="tc">ROBOFRIENDS</h1>
                <Labels startNewGame={this.startNewGame} />
                <CardList />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}
export default connect(mapStateToProps, { setNumberOfCards, requestRobots, createInitialIsFlippedState, createInitialIsMatchedState })(App);