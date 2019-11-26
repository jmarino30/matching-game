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
    SET_DECK_SET,
    MODAL_ALERT,
    MODAL_PROMPT,
    CLOSE_MODAL,
    OPTIONS_ON,
    OPTIONS_OFF,
    TOGGLE_OPTIONS,
    NUM_OF_CARDS,
    WINDOW_WIDTH
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
export const handleIsFlipReducer = (state={isFlipped:[]}, action) => {
    let isFlipped = [];
    switch (action.type) {
        case CREATE_INITIAL_IS_FLIPPED_STATE:
            return {...state, isFlipped: action.payload};
        case HANDLE_FLIP:
            isFlipped = state.isFlipped.map((card, index) => {
                if (index === action.payload) {
                    return !card;
                }
                return card;
            });
            return {...state, isFlipped};
        default: 
            return state;
    }
}
export const handleMatchesReducer = (state={isMatched:[]}, action) => {
    switch (action.type) {
        case CREATE_INITIAL_IS_MATCHED_STATE:
            return {...state, isMatched: action.payload};
        case MATCH_FOUND:
            const isMatched = state.isMatched.map((card, index) => {
                if (index === action.payload.cardOneIndex || index === action.payload.cardTwoIndex) {
                    return true;
                }
                return card;
            });
            return {...state, isMatched};
        default:
            return state;
    }
}
const initialActiveCardsState = {
    previousCard: {
        index: null,
        id: null,
        pending: false
    }
}
export const handleActiveCardsReducer = (state=initialActiveCardsState, action) => {
    switch (action.type) {
        case STORE_PREVIOUS_CARD: 
            return {...state, 
                    previousCard: {
                        ...state.previousCard, 
                            index: action.payload.cardIndex, 
                            id: action.payload.id
                        }
                    };
        case PREVIOUS_CARD_PENDING: 
            return {...state, 
                    previousCard: {
                        ...state.previousCard, 
                            pending: true, 
                        }
                    };
        case RESET_ACTIVE_CARDS:
                return {...state, 
                        previousCard: {
                            ...state.previousCard, 
                                index: null, 
                                id: null,
                                pending: false
                            }
                        };
        default:
            return state;
    }
}
export const deckSetReducer = (state={deckSet: 1}, action) => {
    switch (action.type) {
        case SET_DECK_SET: 
            return {...state, deckSet: action.payload};
        default:
            return state;
    }
}
export const modalReducer = (state={modal: null}, action) => {
    switch (action.type) {
        case MODAL_ALERT:
            document.body.classList.add('overflow-hidden');
            return {...state, modal: 'alert', message: action.payload};
        case MODAL_PROMPT:
                document.body.classList.add('overflow-hidden');
            return {...state, modal: 'prompt', message: action.payload};
        case CLOSE_MODAL:
                document.body.classList.remove('overflow-hidden');
            return {...state, modal: null, message: null};
        default:
            return state;
    }
}
export const optionsReducer = (state={optionsMenu:null}, action) => {
    switch (action.type) {
        case OPTIONS_ON:
            return {...state, optionsMenu: true};
        case OPTIONS_OFF:
            return {...state, optionsMenu: false};
        case TOGGLE_OPTIONS:
            return {...state, optionsMenu: !state.optionsMenu};
        default:
            return state;
    }
}
export const numOfCardsReducer = (state={numOfCards: 20}, action) => {
    switch (action.type) {
        case NUM_OF_CARDS:
            return {...state, numOfCards: action.payload};
        default:
            return state;
    }
}
export const windowWidthReducer = (state={width: 0}, action) => {
    switch (action.type) {
        case WINDOW_WIDTH:
            return {...state, width: action.payload};
        default:
            return state;
    }
}
/*
export const handleFlipReducer = (state={}, action={}) => {
    let cards = [];
    switch (action.type) {
        case 'CREATE_INIITAL_CARD_STATE':
            //payload of number of cards
            
            cards.push({isFlipped: false, isMatched: false, isActive: false, id: action.payload});
            
            return {...state, cards};
        case 'ASSIGN_ROBOT_ID':
            cards = state.cards.map((card, index) => {
                if (action.payload.cardIndex === index) {
                    return {...card, robotId: action.payload.robotId};
                }
                return card;
            });
            return {...state, cards};
        case 'CARD_CLICKED':
             cards = state.cards.map((card, index) => {
                if (action.payload.cardIndex === index) {
                    if (!card.isMatched) {
                        return {...card, isFlipped: !card.isFlipped, isActive: true};
                    }
                }
                return card;
            });
            return {...state, cards};
        case 'MATCH_FOUND': 
             cards = state.cards.map((card, index) => {
                if (action.payload.cardOneIndex === index) {
                    return {...card, isMatched: true};
                } else if (action.payload.cardTwoIndex === index) {
                    return {...card, isMatched: true};
                } else {
                    return card;
                }
            });
            return {...state, cards}; 
        case 'RESET_ACTIVE_CARDS':
            cards = state.cards.map((card, index) => {
                if (action.payload.cardOneIndex === index) {
                    return {...card, isActive: false}
                } else if (action.payload.cardTwoIndex === index) {
                    return {...card, isActive: false}
                } else {
                    return card;
                }
            });
            return {...state, cards};
        default: return state;
    }
}
*/