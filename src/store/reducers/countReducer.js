import { INCREMENT,DECREMENT } from "../actionTypes/countActionTypes"
import { initialState } from "../state/countState"


function countReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + action.payload
            }


        case DECREMENT:
            return {
                count: state.count - action.payload
            }

        default:
            return state
    }
}

export default countReducer;