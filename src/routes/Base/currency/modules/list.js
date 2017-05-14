import baseService from 'SERVICE/baseService'

// ------------------------------------
// Constants
// ------------------------------------
const RECEIVE_ZEN = 'RECEIVE_ZEN'
const REQUEST_ZEN = 'REQUEST_ZEN'

// ------------------------------------
// Actions
// ------------------------------------

function requestZen(text) {
    return {
        type: REQUEST_ZEN,
        text
    }
}

let avaliableId = 0
export const receiveZen = (value) => ({
    type: RECEIVE_ZEN,
    payload: {
        text: '121212',
        id: avaliableId++
    }
})

export function entAccountList() {
    return (dispatch, getState) => {
        if (getState().data.fetching) return

        dispatch(requestZen())
        return baseService
            .entAccountList({})
            .then(data => data.text())
            .then(text => dispatch(receiveZen(text)))
            .catch(dispatch(requestZen('error')))
    }
}

export const actions = {
    requestZen,
    receiveZen,
    entAccountList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [REQUEST_ZEN]: (state, action) => {
        return ({ ...state, fetching: true, text: action.text })
    },
    [RECEIVE_ZEN]: (state, action) => {
        return ({ ...state, fetching: false, text: state.text.concat(action.payload) })
    }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    fetching: false,
    text: []
}
export default (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}
