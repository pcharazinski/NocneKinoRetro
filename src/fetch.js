class Fetch {

    static przeslijDane(reservation) {
        fetch('http://localhost:3001/addreservation', {
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
                "description:": `${reservation.description}`,
                "seat": `${reservation.seat}`,
                "isReserved": `${reservation.isReserved}`
            })
        }).then((resp) => console.log(resp)).catch(err => console.log(err));
    }
    static pobierzDane() {
        return new Promise((resolve, reject) => {
            fetch('/').then((resp) => resp.json()).then(data => resolve(data)).catch(err => reject(err));
        })
    }

}

export default Fetch;