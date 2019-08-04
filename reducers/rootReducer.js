import { combineReducers } from 'redux'
// import appData from './dataReducer'
import customers from './CustomerReducer'
import postCustomers from './customerPostReducer'
import customerDelete from './customerDeleteReducer'

const rootReducer = combineReducers({
    customers,
    postCustomers,
    customerDelete
})

export default rootReducer