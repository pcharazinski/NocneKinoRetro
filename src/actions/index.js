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