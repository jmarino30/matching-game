import React from 'react';
import CardList from './CardList';
import Labels from './Labels';
import {connect} from 'react-redux';
import { requestRobots, createInitialIsMatchedState, createInitialIsFlippedState } from '../actions';


class App extends React.Component {

    startNewGame = (numOfCards) => {
        this.props.requestRobots(numOfCards);
        this.props.createInitialIsFlippedState(numOfCards);
        this.props.createInitialIsMatchedState(numOfCards);
    }
    render() {
        return (
            <div className="tc">
                <h1 className="tc">ROBOFRIENDS</h1>
                <Labels startNewGame={this.startNewGame} />
                <CardList startNewGame={this.startNewGame} />
            </div>
        );
    }
}
export default connect(null, { requestRobots, createInitialIsFlippedState, createInitialIsMatchedState })(App);