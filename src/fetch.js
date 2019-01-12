class Fetch{

    static przeslijDane(user, movie){
        fetch('/', { // endpoint testowy
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    "name": `${user.name}`,
                    "surname": `${user.surname}`,
                    "mail": `${user.mail}`,
                    "title": `${taskName}`
                },
                movie: {
                    "title": `${movie.title}`,
                    "date": `${movie.date}`,
                    "seat": `${movie.seat}`
                },

                isReserved: `true`

            })
        }).then((resp) => console.log(resp))
    }


    static pobierzDane(){
        fetch('/')    // endpoint testowy
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
            })
    }


}

export default Fetch;