import { combineReducers } from 'redux'
import {customersReducer} from "./customersReducer";
import {medicinesReducer} from "./medicinesReducer";


const rootReducer = combineReducers({
    customersReducer,
    medicinesReducer
})

export default rootReducer
