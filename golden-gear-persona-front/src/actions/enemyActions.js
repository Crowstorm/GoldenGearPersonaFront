const LOSE_HP = "LOSE_HP";

export const loseHP = (amount, index) => {
    return function (dispatch) {
        dispatch({
            type: LOSE_HP,
            amount,
            index
        })
    }
}