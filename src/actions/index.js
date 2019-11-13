import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED,
    CARD_CLICKED
} from '../constants';

export const requestRobots = () => dispatch => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
}

export const handleFlip = cardID => {
    return {
        type: `${CARD_CLICKED}_${cardID}`,
    }
}
export const handleFirstSelection = (cardIndex, robotID) => {
    return {
        type: 'FIRST_SELECTION',
        payload: {
            cardIndex,
            robotID
        }
    }
}
export const handleSecondSelection = (cardIndex, robotID) => {
    return {
        type: 'SECOND_SELECTION',
        payload: {
            cardIndex,
            robotID
        }
    }
}
export const resetSelections = () => {
    return {
        type: 'RESET_SELECTIONS'
    }
}
export const handleMatchFound = () => {
    return {
        type: 'MATCH_FOUND'
    }
}
export const handleMatchNotFound = () => {
    return {
        type: 'MATCH_NOT_FOUND'
    }
}

//handleFlip
//return action -> type:CARD_CLICKED_(id)
//return firstSelection -> FIRST_SELECTION_CLICKED
//



/*
    if firstSelection=false
        set firstSelection=true
        set firstRobotID
    else if secondSelection=false
        set secondSelection=true
        set secondRobotId
    on render?
      if (firstSelection && secondSelection)
        if ID's match
            keep isFlipped true
            update 'matches' state
            firstSelection=false
            secondSelection=false
        else
            toggle isFlipped back to false
            firstSelection=false
            secondSelection=false




*/