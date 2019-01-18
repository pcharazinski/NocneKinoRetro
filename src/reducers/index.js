import { combineReducers } from 'redux';
import { getMoviesArr } from '../actions';

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

export default combineReducers({
    seatsSelected: selectedSeatNumReducer,
    isRegisterClicked: isRegisterClickedReducer,
    getMoviesArr: getMoviesArrReducer
});