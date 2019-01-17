const Schema=require("../models/schema");

//sprawdzenie czy to miejsce jest zajete czy nie na podstawie daty i tytułu filmu
const getReservation = (req, res) => {
    Schema.find({}, (err, schemas) => {
        if (err) console.log(err);
        console.log('schemas');
        res.send(schemas)
    })
};

//zarezerwowanie miejsca
const postReservation=(req, res)=>{
    const newReservation = new Schema ({
            name: req.body.name,
            surname: req.body.surname,
            mail: req.body.mail,
            title: req.body.title,
            date: req.body.date,
            duration: req.body.duration,
            seat: req.body.seat,
            isReserved: req.body.isReserved
            }
    )
    newReservation.save((err) => {
        if (err) console.log(err);
    })
    res.redirect('/');

};

module.exports = {
    getReservation: getReservation,
    postReservation: postReservation,
}