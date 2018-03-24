const enemyDefaultState = [
    {
        name: 'Orc Warrior',
        hp: 20,
        mp: 0,
    },
    // {
    //     name: 'Orc Warrior',
    //     hp: 20,
    //     mp: 0,
    // },
    // {
    //     name: 'Orc Warrior',
    //     hp: 20,
    //     mp: 0,
    // }

]

const enemyReducer = (state = enemyDefaultState, action) => {
    switch (action.type) {
        // case 'SET_CHAR_CARD_STATE':
        //     return{
        //         ...state,
        //         charCardVisibility: action.visibility
        //     }
        case 'LOSE_HP':
            return [
                { ...state[0], hp: state[0].hp - action.amount }
            ]
        default:
            return state;
    }

}

export default enemyReducer;