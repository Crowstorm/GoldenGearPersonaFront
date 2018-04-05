const LOSE_HP = "LOSE_HP";

export const loseHP = (amount, index) => {
    return function (dispatch, getState) {

        if(getState().enemy.length === 1 && getState().enemy[index].stats.hp - amount <=0){
            alert('wygrales');
            return 0;
        } else if(getState().enemy[index].stats.hp - amount <=0){
            console.log('gowno umarlem')
            dispatch({
                type: 'ENEMY_DIED',
                index
            })
        } else{
            dispatch({
                type: LOSE_HP,
                amount,
                index
            })
        }  
    }
}