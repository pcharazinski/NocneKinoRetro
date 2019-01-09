const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    user: {
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
        }
    },
    movie: {
        title: String,
        date: Date,
        required: true,
        seat: [1-50],
    },
    isReserved: {
    type: Boolean,  
}
});

module.exports = mongoose.model('reservation', reservationSchema);