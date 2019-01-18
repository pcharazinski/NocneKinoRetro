class Api{

    static async getMovie(id){

        // key: 02b7c790eefcf035ffc889efdfc6cb77

        const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02b7c790eefcf035ffc889efdfc6cb77&language=pl`)
            .then(res => res.json())
            .then(data => data)

            return movie;
    }
}

export default Api;