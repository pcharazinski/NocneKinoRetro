class Fetch{

    static przeslijDane(reservation){
        fetch('/reservation', {
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
                "row": `${reservation.row}`,
                "seatInRow": `${reservation.seatInRow}`,
                "isReserved": `${reservation.isReserved}`
            })
        }).then((resp) => console.log(resp))
    }


    static pobierzDane(){
        return new Promise((resolve, reject) => {
            fetch('/').then((resp) => resp.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    }

}

export default Fetch;