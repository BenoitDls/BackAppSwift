const mongoose = require('mongoose');

const ThingSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    type: {type: String, required: true},
    warning_low: {type: Number, required: true},
    warning_high: {type: Number, required: true},
    measure_unit: {type: String, required: true},
    value: {type: String, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Thing', ThingSchema);