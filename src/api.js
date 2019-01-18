class Api{
    constructor(){
        this.movieIds = [238, 278, 680, 550, 769, 424, 497, 13];
        this.apiKey = '02b7c790eefcf035ffc889efdfc6cb77';
        this.apiUrl = 'https://api.themoviedb.org/3/movie/';
    }

    static async getMovie(id){

        const movie = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=02b7c790eefcf035ffc889efdfc6cb77&language=pl`)
            .then(res => res.json())
            .then(data => data)

            return movie;
    }
}

export default Api;