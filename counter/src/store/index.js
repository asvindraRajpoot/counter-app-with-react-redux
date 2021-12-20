import { createStore } from "redux";

function reducer(state = { count: 0, step: 1, max: Infinity }, action) {
    switch (action.type) {
        case 'increment':
            return state.count+state.step<=state.max?{ ...state, count: state.count + state.step }:{...state}

        case 'decrement':
            return { ...state, count: state.count - state.step }

        case 'reset':
            return { count: 0 }

        case 'updateStep':
            return { ...state, step: action.payload }
        case 'updateMax':
            return { ...state, max: action.payload }


        default:
            return state

    }


}





let store = createStore(reducer);

export default store;