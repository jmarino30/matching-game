import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';
import {requestRobots, handleIsFlipReducer, handleActiveCardsReducer, handleMatchesReducer, deckSetReducer, modalReducer, optionsReducer, numOfCardsReducer} from './reducers';

const logger = createLogger();
const rootReducer = combineReducers({requestRobots, handleIsFlipReducer, handleActiveCardsReducer, handleMatchesReducer, deckSetReducer, modalReducer, optionsReducer, numOfCardsReducer});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
    <Provider store={store} ><App /></Provider>, 
    document.getElementById('root'));
