class Fetch {

    static przeslijDane(reservation) {
        fetch('/addreservation', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": `${reservation.name}`,
                "mail": `${reservation.mail}`,
                "title": `${reservation.title}`,
                "date": `${reservation.date}`,
                "duration": `${reservation.duration}`,
                "rows": `${reservation.rows}`,
                "isReserved": `${reservation.isReserved}`
            })
        }).then((resp) => console.log(resp))
    }


    async pobierzDane() {
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
      
        pobierzDane().then(res => {
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