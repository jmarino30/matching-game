import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    HANDLE_FLIP,
    CREATE_INITIAL_IS_FLIPPED_STATE,
    CREATE_INITIAL_IS_MATCHED_STATE,
    RESET_ACTIVE_CARDS,
    STORE_PREVIOUS_CARD,
    PREVIOUS_CARD_PENDING,
    MATCH_FOUND,
    SET_DECK_SET
} from '../constants';

const shuffle = (array) => {
    for(let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
}
export const requestRobots = (numOfCards) => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch(`https://randomuser.me/api/?results=${parseInt(numOfCards/2)}&inc=name,email`)
        .then(response => response.json())
        .then(data => {
            // Create copy of each robot
            let matchedRobots = []; 
            for (const value in data.results) {
                matchedRobots.push(data.results[value]);
                matchedRobots.push(data.results[value]);
            }
            // Shuffle deck (robots)
            shuffle(matchedRobots); 
            dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: matchedRobots })})
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}
export const handleFlip = (cardIndex) => {
    return {
        type: HANDLE_FLIP,
        payload: cardIndex
    }
}
export const createInitialIsFlippedState = numOfCards => {
    let isFlipped = new Array(numOfCards).fill(false);
    return {
        type: CREATE_INITIAL_IS_FLIPPED_STATE,
        payload: isFlipped
    }
}
export const createInitialIsMatchedState = numOfCards => {
    let isMatched = new Array(numOfCards).fill(false);
    return {
        type: CREATE_INITIAL_IS_MATCHED_STATE,
        payload: isMatched
    }
}
export const resetActiveCards = (cardOneIndex, cardTwoIndex) => {
    return {
        type: RESET_ACTIVE_CARDS,
        payload: {
            cardOneIndex,
            cardTwoIndex
        }
    }
}
export const storePreviousCard = (cardIndex, id) => {
    return {
        type: STORE_PREVIOUS_CARD,
        payload: {
            cardIndex,
            id,
            pending: false
        }
    }
}
export const setPending = value => {
    return {
        type: PREVIOUS_CARD_PENDING,
        payload: value
    }
}
export const handleMatchFound = (cardOneIndex, cardTwoIndex) => {
    return {
        type: MATCH_FOUND,
        payload: {
            cardOneIndex,
            cardTwoIndex
        }
    }
}
export const setDeckSet = deckSet => {
    return {
        type: SET_DECK_SET,
        payload: deckSet
    }
}