import * as actions from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default function cheeseReducer(state = initialState, action) {
    if (action.type === actions.FETCH_CHEESES_REQUEST) {
        return Object.assign({}, state, {
            loading: action.loading
        })
    }
    if (action.type === actions.FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
            loading: action.loading,
            error: action.error,
            cheeses: action.cheeses
        })
    }
    if (action.type === actions.FETCH_CHEESES_ERROR) {
        return Object.assign({}, state, {
            loading: action.loading,
            error: action.error
        })
    }
    return state;
}