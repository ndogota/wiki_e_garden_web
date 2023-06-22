const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantFeatureSchema = new Schema({
    plantCategoryId: {type: Number, required: true, unique: true},
    plantCategoryName: {type: String, required: true},
    values: {},
    createdDate: {type: Date, default: Date.now()},
    updatedDate: {type: Date, default: Date.now()}
});

const plantFeatureClass = mongoose.model('plant-feature', plantFeatureSchema);

module.exports = plantFeatureClass;