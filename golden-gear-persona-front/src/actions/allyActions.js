const ALLY_LOSE_HP = 'ALLY_LOSE_HP';

export const allyLoseHP = (amount) => {
    return function (dispatch) {
        dispatch({
            type: ALLY_LOSE_HP,
            amount
        })
    }
}