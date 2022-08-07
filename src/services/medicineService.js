
export const medicineFetchAll = medicines => {
    return {
        type: 'medicines/medicineFetchAll',
        payload: medicines
    }
}

export function getMedicines() {
    return async function getMedicinesThunk(dispatch, getState) {
        const response = await client.get('/medicines')
        dispatch(medicineFetchAll(response))
    }
}

export const medicineUpdate = medicine => {
    return {
        type: 'medicines/medicineUpdate',
        payload: medicine,
        id: medicine['_id']
    }
}

export function modifyMedicine(medicine) {
    return async function modifyMedicineThunk(dispatch, getState) {
        const response = await client.put(`/medicines/${medicine['_id']}`, medicine)
        dispatch(medicineUpdate(response))
    }
}

export const medicineCreate = medicine => {
    return {
        type: 'medicines/medicineCreate',
        payload: medicine
    }
}

export function addMedicine(medicine) {
    return async function addMedicineThunk(dispatch, getState) {
        const response = await client.post('/medicines', medicine)
        dispatch(medicineCreate(response))
    }
}

export const medicineDelete = id => {
    return {
        type: 'medicines/medicineDelete',
        id: id
    }
}

export function removeMedicine(id) {
    return async function removeMedicineThunk(dispatch, getState) {
        const response = await client.delete(`/medicines/${id}`)
        dispatch(medicineDelete(response['_id']))
    }
}

export const medicineFetchById = medicine => {
    return {
        type: 'medicines/medicineFetchById',
        payload: medicine,
        id: medicine['_id']
    }
}

export function getMedicineById(id) {
    return async function getMedicineByIdThunk(dispatch, getState) {
        const response = await client.get(`/medicines/${id}`)
        dispatch(medicineFetchById(response))
    }
}

export const medicineAddCustomer = medicine => {
    return {
        type: 'medicines/medicineAddCustomer',
        payload: medicine,
        id: medicine['_id']
    }
}

export function attachCustomerToMed(med_id, cust_id) {
    return async function attachCustomerToMedThunk(dispatch, getState) {
        const response = await client.post(`/medicines/${med_id}/customers/${cust_id}`)
        dispatch(medicineAddCustomer(response))
    }
}

export const medicineFetchCustomersById = medicine => {
    return {
        type: 'medicines/medicineFetchCustomersById',
        payload: medicine,
        id: medicine['_id']
    }
}

export function getCustomersForMed(id) {
    return async function getCustomersForMedThunk(dispatch, getState) {
        const response = await client.get(`/medicines/${id}/customers`)
        dispatch(medicineFetchCustomersById(response))
    }
}

