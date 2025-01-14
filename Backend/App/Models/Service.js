"use strict";

const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    del: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Define the model
const Service = model('Service', ServiceSchema);

module.exports = Service;
