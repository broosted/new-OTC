import { combineReducers } from 'redux'
import customersReducer from "../features/customers/customerSlice";
import medicinesReducer from "../features/medicines/medicineSlice";


const rootReducer = combineReducers({
    customers: customersReducer,
    medicines: medicinesReducer
})

export default rootReducer
