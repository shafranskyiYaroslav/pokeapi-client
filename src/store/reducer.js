import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { SELECT_CARD, CHANGE_FIRST_ID, UNSELECT_CARD, FILTER_BY_TYPE } from './actions/actions';

const initialState = {
    selectedCardId: 0,
    firstId: 1,
    lastId: 12,
    selectedType: '',
}

const reducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case SELECT_CARD:
            return {
                ...state,
                selectedCardId: payload,
            };
        case UNSELECT_CARD:
            return {
                ...state,
                selectedCardId: 0,
            }
        case CHANGE_FIRST_ID:
            const { firstId, lastId } = state;
            return {
                ...state,
                firstId: firstId + 12,
                lastId: lastId + 12,
                selectedCardId: 0,
                selectedType: '',
            };
        case FILTER_BY_TYPE:
            return {
                ...state,
                selectedType: payload,
            }
        default:
            return state;
    }
}

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(),
  ));
  
  export default store
