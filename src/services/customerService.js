
export const customerFetchAll = customers => {
    return {
        type: 'customers/customerFetchAll',
        payload: customers
    }
}

export function getCustomers() {
    return async function getCustomersThunk(dispatch, getState) {
        const response = await client.get('/customers')
        dispatch(customerFetchAll(response))
    }
}


export const customerUpdate = customer => {
    return {
        type: 'customers/customerUpdate',
        payload: customer,
        id: customer['_id']
    }
}

export function modifyCustomer(customer) {
    return async function modifyCustomerThunk(dispatch, getState) {
        const response = await client.put(`/customers/${customer['_id']}`, customer)
        dispatch(customerUpdate(response))
    }
}

export const customerCreate = customer => {
    return {
        type: 'customers/customerCreate',
        payload: customer
    }
}

export function addCustomer(customer) {
    return async function addCustomerThunk(dispatch, getState) {
        const response = await client.post('/customers', customer)
        dispatch(customerCreate(response))
    }
}

export const customerDelete = id => {
    return {
        type: 'customers/customerDelete',
        id: id
    }
}

export function removeCustomer(id) {
    return async function removeCustomerThunk(dispatch, getState) {
        const response = await client.delete(`/customers/${id}`)
        dispatch(customerDelete(response['_id']))
    }
}

export const customerFetchById = customer => {
    return {
        type: 'customers/customerFetchById',
        payload: customer,
        id: customer['_id']
    }
}

export function getCustomerById(id) {
    return async function getCustomerByIdThunk(dispatch, getState) {
        const response = await client.get(`/customers/${id}`)
        dispatch(customerFetchById(response))
    }
}
