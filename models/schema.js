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
        seat: {
            place: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            isReserved: Boolean,
        }
    },
});

const Example = mongoose.model('Example', reservationSchema);
async function createcostam(){
const example = new Example({
    user: {
            name: 'Kinga',
            surname: 'Jask',
            mail: 'zarazoszaleje@gmail.com',
        },
    movie: {
            title: 'shrek',
            
            seat: {
                place: [],
            }
        }
    });
   const result = await example.save();
   console.log(result);
}

createcostam();
module.exports = mongoose.model('reservation', reservationSchema);