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


    static async pobierzDane(title, date) {
        try {
          const rezerwacje = await fetch(`/getreservation/${title}/${date}`);
        //   console.log(rezerwacje);
          const rezerwacjeJson = await rezerwacje.json();
        //   console.log(rezerwacjeJson);
          return rezerwacjeJson;

        } catch (err) {
            console.log(err)
          }
    }


    static async zwrocZarezerwowane(title, date){
        var miejsca = [];
      
        await this.pobierzDane(title, date).then(res => {
          res.forEach(rezerwacja => {
            if (rezerwacja.isReserved === true){
              miejsca.push((rezerwacja.seat));
            }
          })
        })
        // console.log(miejsca);
        return miejsca;
                    
    }
                
                
}

export default Fetch;