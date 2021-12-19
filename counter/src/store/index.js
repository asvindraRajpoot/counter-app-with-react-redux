import { createStore } from "redux";

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }

        case 'decrement':
            return { count: state.count - 1 }

        case 'reset':
            return { count: 0 }


        default:
            return state

    }


}

let store = createStore(reducer);

export default store;