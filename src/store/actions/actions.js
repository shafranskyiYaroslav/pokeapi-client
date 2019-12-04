export const SELECT_CARD = 'SELECT_CARD';
export const CHANGE_FIRST_ID = 'CHANGE_FIRST_ID';

export const selectCard = (payload) => ({
    type: SELECT_CARD,
    payload,
})

export const changeFirstId = (payload) => ({
    type: CHANGE_FIRST_ID,
    payload,
})