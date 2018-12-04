const mongoose = require('mongoose');

const ThingSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    type: {type: String, required: false},
    warning_low: {type: Number, required: false},
    warning_high: {type: Number, required: false},
    measure_unit: {type: String, required: false},
    value: {type: String, required: true},
    date: {type: Date, required: true}
})

module.exports = mongoose.model('Thing', ThingSchema);