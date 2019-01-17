class Fetch {

    static przeslijDane(reservation) {
        return new Promise((resolve, reject) => {
        fetch('/addreservation', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": `${reservation.name}`,
                "surname": `${reservation.surname}`,
                "mail": `${reservation.mail}`,
                "title": `${reservation.title}`,
                "date": `${reservation.date}`,
                "duration": `${reservation.duration}`,
                "seat": `${reservation.seat}`,
                "isReserved": `${reservation.isReserved}`
            })
        }).then((resp) => resolve(resp))
    })
}


    static async pobierzDane() {
        try {
          const rezerwacje = await fetch('/getreservation')
          const rezerwacjeJson = await rezerwacje.json()
          return rezerwacjeJson;

        } catch (err) {
            console.log(err)
          }
    }


    static zwrocZarezerwowane(){
        let miejsca = [];
      
        this.pobierzDane().then(res => {
          res.forEach(rezerwacja => {
            if (rezerwacja.isReserved){
              miejsca.push(rezerwacja.rows);
            }
          })
        })

        return miejsca;
    }


}

export default Fetch;