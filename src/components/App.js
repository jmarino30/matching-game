import React from 'react';
import CardList from './CardList';
import Labels from './Labels';
import {connect} from 'react-redux';
import { requestRobots, createInitialIsMatchedState, createInitialIsFlippedState, setDeckSet } from '../actions';
import './CardList.css';

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
export default connect(null, { requestRobots, createInitialIsFlippedState, createInitialIsMatchedState, setDeckSet })(App);