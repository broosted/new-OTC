const initialState = {
    medicines: [
        {
            "medi_id": "200",
            "medi_img_url": "https://www.drugs.com/otc/114245/42%20Count%20Carton%20reduced1.jpg",
            "medi_description": "Zegerid",
            "medi_avg_score": "1",
            "medi_detailed_desc": "Allows absorption of this omeprazole product",
            "customers": [
                {
                    "customer_name": "Ben",
                    "customer_rating": 5,
                    "customer_review": "Wonderful Product",
                    "customer_id": 4,
                },
                {
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
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}

