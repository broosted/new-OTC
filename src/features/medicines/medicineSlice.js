import { createSlice } from '@reduxjs/toolkit'
import { fetchWrapper} from "../../fetch/fetchWrapper";

export const medicineSlice = createSlice({
    name: 'medicines',
    initialState: {
        status: 'idle',
        medicines: [
            {
                "_id": "62e97b8f8c0f7c4c2c9d3d3d",
                "medi_id": "200",
                "medi_img_url": "https://www.drugs.com/otc/114245/42%20Count%20Carton%20reduced1.jpg",
                "medi_description": "Zegerid",
                "medi_avg_score": "1",
                "medi_detailed_desc": "Allows absorption of this omeprazole product",
                "customers": [
                    {
                        "_id": "62e97d7aebf77e9aef415fec",
                        "customer_name": "Ben",
                        "customer_rating": 5,
                        "customer_review": "Wonderful Product",
                        "customer_id": 4,
                    },
                    {
                        "_id": "62e97ecf8c03c3cdf74101b7",
                        "customer_name": "Sena",
                        "customer_rating": 3,
                        "customer_review": "I liked it and helped me",
                        "customer_id": 6,
                    }
                ]
            }
        ]
    },
    reducers: {
        medicineFetchAll: (state,action) => {
            state.medicines.push(action.payload)
        },
        medicineUpdate: (state,action) => {
            state.medicines.map(medicine => {
                if(medicine['_id'] === action.id) {
                    return {...medicine,
                        "medi_img_url": action.payload['medi_img_url'],
                        "medi_description": action.payload['medi_description'],
                        "medi_avg_score": action.payload['medi_avg_score'],
                        "medi_detailed_desc": action.payload['medi_detailed_desc']
                    }
                }
                return medicine
            })
            state.status = 'UPDATED'
        },
        medicineCreate: (state,action) => {
            state.medicines.push(action.payload)
            state.status = 'CREATED'
        },
        medicineDelete: (state, action) => {
            state.medicines.filter(medicine => (medicine['_id'] === action.id))
            state.status = 'DELETED'
        },
        medicineFetchById: (state, action) => {
            state.medicines.map(medicine => {
                if(medicine['_id'] === action.id) {
                    return {...medicine,
                        "medi_img_url": action.payload['medi_img_url'],
                        "medi_description": action.payload['medi_description'],
                        "medi_avg_score": action.payload['medi_avg_score'],
                        "medi_detailed_desc": action.payload['medi_detailed_desc'],
                        "customers": action.payload['customers']
                    }
                }
                return medicine
            })
            state.status = 'UPDATED'
        },
        medicineFetchCustomersById: (state, action) => {
            state.medicines.map(medicine => {
                if(medicine['_id'] === action.id) {
                    return {...medicine, "customers": action.payload['customers']}
                }
                return medicine
            })
            state.status = 'UPDATED'
        },
        medicineAddCustomer: (state, action) => {
            state.medicines.map(medicine => {
                if(medicine['_id'] === action.id) {
                    return {...medicine, "customers": [...medicine.customers, action.payload['customers']]}
                }
                return medicine
            })
            state.status = 'CUST_ADDED'
        }
    }
})

export const {medicineFetchAll, medicineUpdate, medicineCreate, medicineDelete, medicineFetchById, medicineFetchCustomersById, medicineAddCustomer} = medicineSlice.actions

export const getMedicines = () => async (dispatch) => {
    const response = await fetchWrapper.get('/medicines')
    dispatch(medicineFetchAll(response))
}

export const modifyMedicine = (medicine) => async (dispatch) => {
    const response = await fetchWrapper.put(`/medicines/${medicine['_id']}`, medicine)
    dispatch(medicineUpdate(response))
}

export const addMedicine = (medicine) => async (dispatch) => {
    const response = await fetchWrapper.post('/medicines', medicine)
    dispatch(medicineCreate(response))
}

export const removeMedicine = (id) => async (dispatch) => {
    const response = await fetchWrapper.delete(`/medicines/${id}`)
    dispatch(medicineDelete(response['_id']))
}

export const getMedicineById = (id) => async (dispatch) => {
    const response = await fetchWrapper.get(`/medicines/${id}`)
    dispatch(medicineFetchById(response))
}

export const attachCustomerToMed = (med_id, cust_id) => async (dispatch) => {
    const response = await fetchWrapper.post(`/medicines/${med_id}/customers/${cust_id}`)
    dispatch(medicineAddCustomer(response))
}

export const getCustomersForMed = (id) => async (dispatch) => {
    const response = await fetchWrapper.get(`/medicines/${id}/customers`)
    dispatch(medicineFetchCustomersById(response))
}

export default medicineSlice.reducer
