import { createSlice } from '@reduxjs/toolkit'
import { fetchWrapper} from "../../fetch/fetchWrapper";

export const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        status: 'idle',
        customers: [
            {
                "customer_name": "Jenny",
                "customer_rating": 3,
                "customer_review": "Wonderful Product",
                "customer_id": 3,
            }
        ]
    },
    reducers: {
        customerFetchAll: (state, action) => {
            state.customers.push(action.payload)
        },
        customerUpdate: (state, action) => {
            state.customers.map(customer => {
                if (customer['_id'] === action.id) {
                    return {
                        ...customer,
                        "customer_name": action.payload['customer_name'],
                        "customer_rating": action.payload['customer_rating'],
                        "customer_review": action.payload['customer_review'],
                        "customer_id": action.payload['customer_id']
                    }
                }
            })
            state.status = 'UPDATED'
        },
        customerCreate: (state, action) => {
            state.customers.push(action.payload)
            state.status = 'CREATED'
        },
        customerDelete: (state, action) => {
            state.customers.filter(customer => (customer['_id'] === action.id))
            state.status = 'DELETED'
        },
        customerFetchById: (state,action) => {
            state.customers.map(customer => {
                if(customer['_id'] === action.id) {
                    return action.payload
                }
                return customer
            })
        },
    }
})

export const { customerFetchAll, customerUpdate, customerCreate, customerDelete, customerFetchById} = customerSlice.actions

export const getCustomers = () => async (dispatch) => {
    const response = await fetchWrapper.get('/customers')
    dispatch(customerFetchAll(response))
}


export const modifyCustomer = (customer) => async (dispatch) => {
    const response = await fetchWrapper.put(`/customers/${customer['_id']}`, customer)
    dispatch(customerUpdate(response))
}

export const addCustomer = (customer) => async (dispatch) => {
    const response = await fetchWrapper.post('/customers', customer)
    dispatch(customerCreate(response))
}

export const removeCustomer = (id) => async (dispatch) => {
    const response = await fetchWrapper.delete(`/customers/${id}`)
    dispatch(customerDelete(response['_id']))
}

export const getCustomerById = (id) => async (dispatch) => {
    const response = await fetchWrapper.get(`/customers/${id}`)
    dispatch(customerFetchById(response))
}

export default customerSlice.reducer
