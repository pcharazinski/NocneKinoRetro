import { combineReducers } from 'redux';

const selectedSeatNumReducer = (seat = null, action) => {
    if(action.type === 'SEAT_SELECTED'){
        return action.payload;
    }
    return seat;
};

const isRegisterClickedReducer = (click = false, action) => {
    if(action.type === 'REGISTER_CLICKED'){
        return action.payload;
    }
    return click;
}

const fetchMoviesReducer = (state = null, action) => {
    if(action.type === 'FETCH_MOVIES'){
        return action.payload;   
}
    return state;
}

const getIdOfMovieReducer = (state = null, action) => {
    if(action.type === 'MOVIE_ID'){
        return action.payload;   
}
    return state;
}

export default combineReducers({
    seatsSelected: selectedSeatNumReducer,
    isRegisterClicked: isRegisterClickedReducer,
    movies: fetchMoviesReducer,
    idOfMovie: getIdOfMovieReducer
});