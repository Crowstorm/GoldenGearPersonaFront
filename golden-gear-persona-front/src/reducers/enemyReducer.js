const enemyDefaultState = [
    {
        name: 'Stupid Boy',
        portrait: 'https://d1u5p3l4wpay3k.cloudfront.net/crafttheworld_gamepedia/b/b8/Beholder.png',
        stats: {
            hp: 20,
            mp: 0,
            defence: 5,
            agility: 7,
            speed: 12,
            strength: 5
        }
    },
    {
        name: 'Wicked Boy',
        portrait: 'https://vignette.wikia.nocookie.net/eberron/images/4/4a/Beholder.jpg/revision/latest?cb=20111004002157',
        stats: {
            hp: 20,
            mp: 0,
            defence: 3,
            agility: 7,
            speed: 3,
            strength: 2
        }

    },
    {
        name: 'European Boy',
        portrait: 'https://i.pinimg.com/originals/ce/48/b5/ce48b5ff66a976011a24ac8d7f722d5e.png',
        stats: {
            hp: 20,
            mp: 0,
            defence: 4,
            agility: 7,
            speed: 6,
            strength: 3
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
        case 'ADD_ENEMY':{
            return[
                ...state,
                action.enemy
            ]
        }
        case 'CLEAR_ENEMIES':{
            return[
               
            ]
        }
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