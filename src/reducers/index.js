import { 
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from '../constants';

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case REQUEST_ROBOTS_FAILED:
            return {...state, error: action.payload, isPending: false};
        default:
            return state;
    }
}
const initialCardState = {
    isFlipped_0 : false,
    isFlipped_1 : false,
    isFlipped_2 : false,
    isFlipped_3 : false,
    isFlipped_4 : false,
    isFlipped_5 : false,
    isFlipped_6 : false,
    isFlipped_7 : false,
    isFlipped_8 : false,
    isFlipped_9 : false,
    isFlipped_10 : false,
    isFlipped_11 : false,
    isFlipped_12 : false,
    isFlipped_13 : false,
    isFlipped_14 : false,
    isFlipped_15 : false,
    isFlipped_16 : false,
    isFlipped_17 : false,
    isFlipped_18 : false,
    isFlipped_19 : false,
}
export const handleFlipReducer = (state=initialCardState, action={}) => {
    switch (action.type) {
        case 'CARD_CLICKED_0': return {...state, isFlipped_0: !state.isFlipped_0};
        case 'CARD_CLICKED_1': return {...state, isFlipped_1: !state.isFlipped_1};
        case 'CARD_CLICKED_2': return {...state, isFlipped_2: !state.isFlipped_2};
        case 'CARD_CLICKED_3': return {...state, isFlipped_3: !state.isFlipped_3};
        case 'CARD_CLICKED_4': return {...state, isFlipped_4: !state.isFlipped_4};
        case 'CARD_CLICKED_5': return {...state, isFlipped_5: !state.isFlipped_5};
        case 'CARD_CLICKED_6': return {...state, isFlipped_6: !state.isFlipped_6};
        case 'CARD_CLICKED_7': return {...state, isFlipped_7: !state.isFlipped_7};
        case 'CARD_CLICKED_8': return {...state, isFlipped_8: !state.isFlipped_8};
        case 'CARD_CLICKED_9': return {...state, isFlipped_9: !state.isFlipped_9};
        case 'CARD_CLICKED_10': return {...state, isFlipped_10: !state.isFlipped_10};
        case 'CARD_CLICKED_11': return {...state, isFlipped_11: !state.isFlipped_11};
        case 'CARD_CLICKED_12': return {...state, isFlipped_12: !state.isFlipped_12};
        case 'CARD_CLICKED_13': return {...state, isFlipped_13: !state.isFlipped_13};
        case 'CARD_CLICKED_14': return {...state, isFlipped_14: !state.isFlipped_14};
        case 'CARD_CLICKED_15': return {...state, isFlipped_15: !state.isFlipped_15};
        case 'CARD_CLICKED_16': return {...state, isFlipped_16: !state.isFlipped_16};
        case 'CARD_CLICKED_17': return {...state, isFlipped_17: !state.isFlipped_17};
        case 'CARD_CLICKED_18': return {...state, isFlipped_18: !state.isFlipped_18};
        case 'CARD_CLICKED_19': return {...state, isFlipped_19: !state.isFlipped_19};
        default: return state;
    }
}
const initialSelectionsState = {
    firstSelection: null,
    secondSelection: null,
    firstRobotID: null,
    secondRobotID: null
}
export const handleSelectionsReducer = (state=initialSelectionsState, action) => {
    switch (action.type) {
        case 'FIRST_SELECTION': return {...state, firstSelection: action.payload.cardIndex, firstRobotID: action.payload.robotID};
        case 'SECOND_SELECTION': return {...state, secondSelection: action.payload.cardIndex, secondRobotID: action.payload.robotID};
        case 'RESET_SELECTIONS': return {...state, ...state, firstSelection: null, secondSelection: null, firstRobotID: null, secondRobotID: null}
        default: return state;
    }
}
export const matchReducer = (state={matches: 0}, action) => {
    switch (action.type) {
        case 'MATCH_FOUND': return {...state, matches: state.matches++};
        case 'MATCH_NOT_FOUND': return state;
        default: return state;
    }
}

/* state = {
    isFlipped: [] //array of indexes 0-19
        [flase,true,true,true,false,]
}

*/