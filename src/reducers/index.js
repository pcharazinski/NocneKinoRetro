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

export default combineReducers({
    seatsSelected: selectedSeatNumReducer,
    isRegisterClicked: isRegisterClickedReducer
});