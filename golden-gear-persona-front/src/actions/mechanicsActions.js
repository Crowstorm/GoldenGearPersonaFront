const ATTACK_READY = "ATTACK_READY";
const SWITCH_TURN = 'SWITCH_TURN'

export const combatStart = () => {
    return function (dispatch, getState) {
        function gowno(){
            let setTimeoutPromise = new Promise(resolve => {
                let success = true;
                setTimeout(function () { resolve(success) }, 2000);
            })
    
            setTimeoutPromise.then((resp) => {
                if (resp) {
                    dispatch({
                        type: 'INCREMENT_ENEMIES_ATTACKED'
                    })
                }
                if (getState().mechanics.noOfEnemiesAttacked < 5) {
                    console.log(getState().mechanics.noOfEnemiesAttacked)
                    combatStart();
                    gowno();
                }
            })
        }
        
        gowno();

    }
}

export const attackReady = (isReady) => {
    return function (dispatch) {
        dispatch({
            type: ATTACK_READY,
            isReady
        })
    }
}

export const switchTurn = (whoseTurn) => {
    return function (dispatch) {
        dispatch({
            type: SWITCH_TURN,
            whoseTurn
        })
    }
}

export const incrementEnemiesAttacked = () => {
    return function (dispatch) {
        dispatch({
            type: 'INCREMENT_ENEMIES_ATTACKED'
        })
    }
}