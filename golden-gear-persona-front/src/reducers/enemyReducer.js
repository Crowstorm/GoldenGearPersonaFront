const enemyDefaultState = [
    {
        name: 'Orc Warrior 1',
        stats: {
            hp: 20,
            mp: 0,
            speed: 12
        }
    },
    {
        name: 'Orc Warrior 2',
        stats: {
            hp: 20,
            mp: 0,
            speed: 3
        }

    },
    {
        name: 'Orc Warrior 3',
        stats: {
            hp: 20,
            mp: 0,
            speed: 6
        }

    }

]

const enemyReducer = (state = enemyDefaultState, action) => {
    switch (action.type) {
        // case 'SET_CHAR_CARD_STATE':
        //     return{
        //         ...state,
        //         charCardVisibility: action.visibility
        //     }
        case 'LOSE_HP':
            const i = action.index;
            return [
                ...state.slice(0, i),
                {
                    ...state[i],
                    stats:{
                        ...state[i].stats,
                        hp: state[i].stats.hp - action.amount
                    }
                },
                ...state.slice(i + 1)
            ]
        default:
            return state;
    }

}

export default enemyReducer;