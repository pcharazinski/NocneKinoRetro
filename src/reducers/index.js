import { combineReducers } from 'redux';

const selectedSeatNumReducer = (seat = null, action) => {
    if(action.type === 'SEAT_SELECTED'){
        return action.payload;
    }
    return seat;
};

export default combineReducers({
    seatsSelected: selectedSeatNumReducer
});