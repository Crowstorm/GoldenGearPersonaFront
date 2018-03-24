const LOSE_HP = "LOSE_HP";

export const loseHP = (amount) => {
    return function (dispatch) {
        dispatch({
            type: LOSE_HP,
            amount
        })
    }
}