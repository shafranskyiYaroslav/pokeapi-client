export const SELECT_CARD = 'SELECT_CARD';
export const CHANGE_FIRST_ID = 'CHANGE_FIRST_ID';
export const UNSELECT_CARD = 'UNSELECT_CARD';

export const selectCard = (payload) => ({
    type: SELECT_CARD,
    payload,
})

export const unselectCard = (payload) => ({
    type: UNSELECT_CARD,
    payload,
})

export const changeFirstId = (payload) => ({
    type: CHANGE_FIRST_ID,
    payload,
})
