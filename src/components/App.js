import React, {useEffect} from 'react';
import CardList from './CardList';
import Labels from './Labels';
import {connect} from 'react-redux';
import { requestRobots, createInitialIsMatchedState, createInitialIsFlippedState, setDeckSet, getWindowWidth } from '../actions';
import './CardList.css';
import Modal from './Modal';

const App = props => {
  useEffect( () => {
    props.getWindowWidth();
    window.addEventListener('resize', props.getWindowWidth);
    return (window.removeEventListener('resize', props.getWindowWidth));
  }, []);

  const startNewGame = (numOfCards) => {
    props.requestRobots(numOfCards);
    props.createInitialIsFlippedState(numOfCards);
    props.createInitialIsMatchedState(numOfCards);
  }
  return (
    <div className="tc">
      <h1>ROBOFRIENDS</h1>
      { props.modal ? 
          <Modal 
          type={props.modal} 
          body={props.message} 
          startNewGame={startNewGame} /> 
      : null }
      <Labels startNewGame={startNewGame} />
      <CardList startNewGame={startNewGame} />
    </div>
  );
}
const mapStateToProps = state => {
    return {
        modal: state.modalReducer.modal,
        message: state.modalReducer.message
    };
}
export default connect(mapStateToProps, { requestRobots, createInitialIsFlippedState, createInitialIsMatchedState, setDeckSet, getWindowWidth })(App);