//Post customer_reducer
import { POSTS_REQUEST, POSTS_REQUEST_SUCCESS, POSTS_REQUEST_FAILURE } from "../actions/customerPostAction"


const initialState = {
    data: [],
    isLoading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case POSTS_REQUEST:
            return {
                ...state,
                isLoading: true,

            }
        case POSTS_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,

            }
        case POSTS_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state
    }
}
