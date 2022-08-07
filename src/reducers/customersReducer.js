const initialState = {
    status: 'idle',
    customers: [
        {
            "customer_name": "Jenny",
            "customer_rating": 3,
            "customer_review": "Wonderful Product",
            "customer_id": 3,
        }
    ]
}

// Use the initialState as a default value
export default function customersReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'customers/customerFetchAll':
            return {
                ...state,
                customers: [...state.customers, action.payload]
            }
        case 'customers/customerUpdate':
            return {
                ...state,
                customers: state.customers.map(customer => {
                    if(customer['_id'] === action.id) {
                        return {...customer,
                            "customer_name": action.payload['customer_name'],
                            "customer_rating": action.payload['customer_rating'],
                            "customer_review": action.payload['customer_review'],
                            "customer_id": action.payload['customer_id']
                        }
                    }
                    return customer
                }),
                status: 'UPDATED'
            }
        case 'customers/customerCreate':
            return {
                ...state,
                customers: [...state.customers, action.payload],
                status: 'CREATED'
            }
        case 'customers/customerDelete':
            return {
                ...state,
                customers: state.customers.filter(customer => (customer['_id'] === action.id)),
                status: 'DELETED'
            }
        case 'customers/customerFetchById':
            return {
                ...state,
                customers: state.customers.map(customer => {
                    if(customer['_id'] === action.id) {
                        return action.payload
                    }
                    return customer
                }),
                status: 'UPDATED'
            }
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}
