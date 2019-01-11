const mongoose = require('mongoose');
const reservationSchema = new mongoose.Schema({
    user: {
        name: {
            type: String,
            required: false,
        },
        surname: {
            type: String,
            required: false,
        },
        mail: {
            type: String,
            required: false,
        }
    },
    movie: {
        title: String,
        date: Date,
        // required: false,
        seat: {
            // place: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            place: Number,
            isReserved: Boolean,
        }
    },
});


// module.exports = createcostam;
module.exports = mongoose.model('reservation', reservationSchema);