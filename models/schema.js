const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        surname: {
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
            type: String,
            required: true
        },
        duration:{
            type: String,
            required: true
        },
        seat:{
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