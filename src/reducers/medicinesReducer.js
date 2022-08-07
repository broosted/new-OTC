
const initialState = {
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
}

// Use the initialState as a default value
export default function medicinesReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        case 'medicines/medicineFetchAll':
            return {
                ...state,
                medicines: [...state.medicines, action.payload]
            }
        case 'medicines/medicineUpdate':
            return {
                ...state,
                medicines: state.medicines.map(medicine => {
                    if(medicine['_id'] === action.id) {
                        return {...medicine,
                            "medi_img_url": action.payload['medi_img_url'],
                            "medi_description": action.payload['medi_description'],
                            "medi_avg_score": action.payload['medi_avg_score'],
                            "medi_detailed_desc": action.payload['medi_detailed_desc']
                        }
                    }
                    return medicine
                }),
                status: 'UPDATED'
            }
        case 'medicines/medicineCreate':
            return {
                ...state,
                medicines: [...state.medicines, action.payload],
                status: 'CREATED'
            }
        case 'medicines/medicineDelete':
            return {
                ...state,
                medicines: state.medicines.filter(medicine => (medicine['_id'] === action.id)),
                status: 'DELETED'
            }
        case 'medicines/medicineFetchById':
            return {
                ...state,
                medicines: state.medicines.map(medicine => {
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
                }),
                status: 'UPDATED'
            }
        case 'medicines/medicineFetchCustomersById':
            return {
                ...state,
                medicines: state.medicines.map(medicine => {
                    if(medicine['_id'] === action.id) {
                        return {...medicine, "customers": action.payload['customers']}
                    }
                    return medicine
                }),
                status: 'UPDATED'
            }
        case 'medicines/medicineAddCustomer':
            return {
                ...state,
                medicines: state.medicines.map(medicine => {
                    if(medicine['_id'] === action.id) {
                        return {...medicine, "customers": [...medicine.customers, action.payload['customers']]}
                    }
                    return medicine
                }),
                status: 'CUST_ADDED'
            }
        default:
            return state
    }
}

