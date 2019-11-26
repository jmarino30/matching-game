import React from 'react';
import CardList from './CardList';
import Labels from './Labels';
import {connect} from 'react-redux';
import { requestRobots, createInitialIsMatchedState, createInitialIsFlippedState, setDeckSet, getWindowWidth } from '../actions';
import './CardList.css';
import Modal from './Modal';

class App extends React.Component {
    componentDidMount() {
        this.props.getWindowWidth();
        window.addEventListener('resize', this.props.getWindowWidth);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.props.getWindowWidth);
      }

    startNewGame = (numOfCards) => {
        this.props.requestRobots(numOfCards);
        this.props.createInitialIsFlippedState(numOfCards);
        this.props.createInitialIsMatchedState(numOfCards);
    }
    render() {
        return (
            <div className="tc">
                <h1 className="tc">ROBOFRIENDS</h1>
                { this.props.modal ? 
                    <Modal 
                    type={this.props.modal} 
                    body={this.props.message} 
                    startNewGame={this.startNewGame} /> 
                : null }
                <Labels startNewGame={this.startNewGame} />
                <CardList startNewGame={this.startNewGame} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modal: state.modalReducer.modal,
        message: state.modalReducer.message
    };
}
export default connect(mapStateToProps, { requestRobots, createInitialIsFlippedState, createInitialIsMatchedState, setDeckSet, getWindowWidth })(App);