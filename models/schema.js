const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        rows:{
            type: String,
            required: true,
        },
        isReserved: {
            type: Boolean,
            required: true
        },
    }
    );

module.exports = mongoose.model('reservation', reservationSchema);