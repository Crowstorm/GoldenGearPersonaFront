const enemyDefaultState = [
    {
        name: 'Stupid Boy',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/3/3d/Ryuji_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202221544',
        stats: {
            hp: 20,
            mp: 0,
            defence: 5,
            speed: 12,
            attack: 5
        }
    },
    {
        name: 'Wicked Boy',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/e/ec/Akechi_All_Out.png/revision/latest/scale-to-width-down/481?cb=20160917054538',
        stats: {
            hp: 20,
            mp: 0,
            defence: 3,
            speed: 3,
            attack: 2
        }

    },
    {
        name: 'European Boy',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/5/5a/Yusuke_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202222135',
        stats: {
            hp: 20,
            mp: 0,
            defence: 4,
            speed: 6,
            attack: 3
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
            let i = action.index;
            return [
                ...state.slice(0, i),
                {
                    ...state[i],
                    stats: {
                        ...state[i].stats,
                        hp: state[i].stats.hp - action.amount
                    }
                },
                ...state.slice(i + 1)
            ]
        case 'ENEMY_DIED':
            let j  = action.index;
            return [
                ...state.slice(0, j),
                ...state.slice(j + 1)
            ]

        default:
            return state;
    }

}

export default enemyReducer;