const express = require('express');
const app = express();
app.use(express.json());


const data = {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    mail: 'jankowalski@gmail.com',     // Przykladowe dane rezerwacji
    tytul: 'Ojciec Chrzestny',
    data: '01/20/2019 20:30',
    miejsce: 34
}


function addReservation(reservationData){

    app.post('/', (req, res)=>{
        const user = {
            name: reservationData.imie,
            surname: reservationData.nazwisko,
            mail: reservationData.mail,
            movie:{
                title: reservationData.tytul,
                date: reservationData.data,
                seat: reservationData.miejsce
            },
            isReserved: true
        }
    
        res.send(user);
    })
}


addReservation(data);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Misiaczku, slucham Cie na porcie ${port}`));