export const getSeatNum = (seat) => {
    return {
        type: 'SEAT_SELECTED',
        payload: seat
    };
};