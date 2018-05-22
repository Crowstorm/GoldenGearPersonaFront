const LOSE_HP = "LOSE_HP";

export const loseHP = (amount, index) => {
    return function (dispatch, getState) {

        if(getState().enemies.length === 1 && getState().enemies[index].stats.hp - amount <=0){
            dispatch({
                type: 'CLEAR_ENEMIES'
            })
            dispatch({
                type: 'STOP_COMBAT'
            })
            // alert('wygrales');
            return 0;
        } else if(getState().enemies[index].stats.hp - amount <=0){
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

export const addEnemy = (enemy) =>{
    return function(dispatch){
        dispatch({
            type: 'ADD_ENEMY',
            enemy
        })
    }
}