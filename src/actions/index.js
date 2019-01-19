import themoviedb from '../apis/themoviedb';

export const getSeatNum = (seat) => {
    return {
        type: 'SEAT_SELECTED',
        payload: seat
    };
};

export const isRegisterClicked = (click) => {
    return {
        type: 'REGISTER_CLICKED',
        payload: click
    };
}

export const fetchMovies = () => async dispatch => {
        let arr = [];
        const movies = [238, 278, 680, 550, 769, 424, 497, 201]
        for(let i=0; i<8; i++){
            let response = await themoviedb.get(`/movie/${movies[i]}?api_key=02b7c790eefcf035ffc889efdfc6cb77&language=pl`);
            arr.push(response.data);
        }
        

        dispatch({type: 'FETCH_MOVIES', payload: arr});
}

export const getIdOfMovie = (id) => {
    return {
        type: 'MOVIE_ID',
        payload: id
    }
}

export const getDate = (date) => {
    return{
        type: 'GET_DATE',
        payload: date
    }
}

export const getBookedSeat = (bookedSeats) => {
    return{
        type: 'BOOKED_SEATS',
        payload: bookedSeats
    }
}