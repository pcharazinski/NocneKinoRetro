const Schema=require("../models/schema");

//sprawdzenie czy to miejsce jest zajete czy nie
// const getReservation=(req,res)=>{
//     Schema.find({seat: req.params.movie.seat}, (err, schemas)=>{
//         if(err) console.log(err);
//         console.log(schemas);
//         res.send(schemas)
//     })
// };
const getReservation = (req, res) => {
    Schema.find({}, (err, schemas) => {
        if (err) console.log(err);
        console.log(schemas);
        res.send(schemas)
    })
};

//zarezerwowanie miejsca
const postReservation=(req, res)=>{
    const newReservation = new Schema ({
        user: {
            name: req.body.user.name,
            surname: req.body.user.surname,
            mail: req.body.user.mail,
                },
        movie: {
            title: req.body.movie.title,
            date: req.body.movie.date,
            seat: {
                place: req.body.movie.seat.place,
                isReserved: req.body.movie.seat.isReserved,
            }
        }

    });
    newReservation.save((err) => {
        if (err) console.log(err);
    })
    res.redirect('/')

}


module.exports = {
    getReservation: getReservation,
}