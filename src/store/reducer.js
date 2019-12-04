import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SELECT_CARD, CHANGE_FIRST_ID, } from './actions/actions';

const initialState = {
    selectedCardId: 0,
    firstId: 1,
    lastId: 12,
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case SELECT_CARD:
            return {
                ...state,
                selectedCardId: payload,
            };
        case CHANGE_FIRST_ID:
            const { firstId, lastId } = state;
            return {
                ...state,
                firstId: firstId + 12,
                lastId: lastId + 12,
                selectedCardId: 0,
            };
        default:
            return state;
    }
}

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(),
  ));
  
  export default store
