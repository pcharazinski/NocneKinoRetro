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
        row:{
            type: Number, //row [1, 2, 3, 4, 5]
            required: true,
        },
        seatInRow: {
            // place: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            type: Number,
            required: true,
        },
        isReserved: {
            type: Boolean,
            required: true
        },
    }
    );

module.exports = mongoose.model('reservation', reservationSchema);