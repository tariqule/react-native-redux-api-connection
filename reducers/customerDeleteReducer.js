//Post customer_reducer
import { DELETE_REQUEST, DELETE_REQUEST_SUCCESS, DELETE_REQUEST_FAILURE } from "../actions/customerDeleteAction"


const initialState = {
    data: [],
    isLoading: false,
    error: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_REQUEST:
            return {
                ...state,
                isLoading: true,

            }
        case DELETE_REQUEST_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                isLoading: false,

            }
        case DELETE_REQUEST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state
    }
}
