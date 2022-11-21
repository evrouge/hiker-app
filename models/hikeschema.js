const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hikeSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String },
    miles: { type: Number },
    description: { type: String },
    rating: { type: String },
    completedHike: { type: Boolean }
})

const Hike = mongoose.model('hike', hikeSchema);
module.exports = Hike;
