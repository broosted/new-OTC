const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediSchema = new Schema({
    medi_id: { type: String, required: true },
    medi_img_url: String,
    medi_description: String,
    medi_avg_score: String,
    medi_detailed_desc: String,
    customers: [{ type: Schema.Types.ObjectId, ref: 'Customer' }]

});


mongoose.model('Medicine', MediSchema);
