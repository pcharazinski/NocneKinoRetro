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

const getMoviesArrReducer = (moviesArr = null, action) => {
    if(action.type === 'MOVIES_ARR'){
        return action.payload;
    }
    return moviesArr;
}

const fetchMoviesReducer = (state = null, action) => {
    if(action.type === 'FETCH_MOVIES'){
        return action.payload;   
}
    return state;
}
export default combineReducers({
    seatsSelected: selectedSeatNumReducer,
    isRegisterClicked: isRegisterClickedReducer,
    getMoviesArr: getMoviesArrReducer,
    movies: fetchMoviesReducer
});