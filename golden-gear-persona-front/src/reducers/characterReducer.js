import { FETCH_CHARACTER } from "../actions/types";
import * as items from './items';

let initial_state = [
    {
        name: null,
        title: null,
        classGame: null,
        portrait: null,
        stats: {
            hp: 25,
            mp: null,
            strength: null,
            defence: null,
            magic: null,
            magicResist: null,
            agility: null,
            luck: null,
            speed: null,
        },
        eq: {
            head: 'https://i.pinimg.com/originals/2e/a8/51/2ea851e26242a29461b14ec21004dfe2.png',
            chest: 'http://piq.codeus.net/static/media/userpics/piq_65251_400x400.png',
            leftHand: 'https://vignette.wikia.nocookie.net/teoria/images/3/39/Piq_68684_400x400.png/revision/latest?cb=20160723153739&path-prefix=pl',
            rightHand: 'https://i.pinimg.com/originals/8b/99/48/8b9948f230b107327413d56e3d83b744.png',
            legs: 'https://orig00.deviantart.net/ba0b/f/2015/019/7/8/minecraft_leather_pants_by_dragonshadow3-d8ekmni.png'
        },
        skills:[
            'backstab',
        ],
        magic:[

        ],
        consumables:[
            items.healingPotion,
            items.manaPotion
           
        ]
    },
    {
        name: 'Axe Girl',
        title: 'Brak',
        classGame: 'warrior',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/6/6b/Haru_All_Out.png/revision/latest?cb=20170202222551',
        stats: {
            hp: 30,
            mp: 10,
            strength: 7,
            defence: 6,
            magic: 2,
            magicResist: 2,
            agility: 4,
            luck: 2,
            speed: 4,
        },
        eq: {
            head: 'https://i.pinimg.com/originals/2e/a8/51/2ea851e26242a29461b14ec21004dfe2.png',
            chest: 'http://piq.codeus.net/static/media/userpics/piq_65251_400x400.png',
            leftHand: 'https://vignette.wikia.nocookie.net/teoria/images/3/39/Piq_68684_400x400.png/revision/latest?cb=20160723153739&path-prefix=pl',
            rightHand: 'https://i.pinimg.com/originals/8b/99/48/8b9948f230b107327413d56e3d83b744.png',
            legs: 'https://orig00.deviantart.net/ba0b/f/2015/019/7/8/minecraft_leather_pants_by_dragonshadow3-d8ekmni.png'
        }
    },
    {
        name: 'Healing Cat',
        title: 'Brak',
        classGame: 'healer',
        portrait: 'https://i.pinimg.com/originals/dc/d7/47/dcd7478c648772f151db89da329e0a25.png',
        stats: {
            hp: 15,
            mp: 30,
            strength: 3,
            defence: 6,
            magic: 5,
            magicResist: 9,
            agility: 7,
            luck: 6,
            speed: 4,
        },
        eq: {
            head: 'https://i.pinimg.com/originals/2e/a8/51/2ea851e26242a29461b14ec21004dfe2.png',
            chest: 'http://piq.codeus.net/static/media/userpics/piq_65251_400x400.png',
            leftHand: 'https://vignette.wikia.nocookie.net/teoria/images/3/39/Piq_68684_400x400.png/revision/latest?cb=20160723153739&path-prefix=pl',
            rightHand: 'https://i.pinimg.com/originals/8b/99/48/8b9948f230b107327413d56e3d83b744.png',
            legs: 'https://orig00.deviantart.net/ba0b/f/2015/019/7/8/minecraft_leather_pants_by_dragonshadow3-d8ekmni.png'
        }
    },
    {
        name: 'Fire Grill',
        title: 'Brak',
        classGame: 'warrior',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/2/25/Ann_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202221932',
        stats: {
            hp: 20,
            mp: 25,
            strength: 4,
            defence: 4,
            magic: 9,
            magicResist: 7,
            agility: 4,
            luck: 4,
            speed: 4,
        },
        eq: {
            head: 'https://i.pinimg.com/originals/2e/a8/51/2ea851e26242a29461b14ec21004dfe2.png',
            chest: 'http://piq.codeus.net/static/media/userpics/piq_65251_400x400.png',
            leftHand: 'https://vignette.wikia.nocookie.net/teoria/images/3/39/Piq_68684_400x400.png/revision/latest?cb=20160723153739&path-prefix=pl',
            rightHand: 'https://i.pinimg.com/originals/8b/99/48/8b9948f230b107327413d56e3d83b744.png',
            legs: 'https://orig00.deviantart.net/ba0b/f/2015/019/7/8/minecraft_leather_pants_by_dragonshadow3-d8ekmni.png'
        }
    },
];

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_CHARACTER: {
            const { name, title, classGame, portrait, statistics } = action.payload;
            const { hp, mp, strength, defence, magic, magicResist, agility, luck, speed } = statistics;
            return [
                ...state.slice(0, 0),
                {
                    ...state[0],
                    name: name,
                    title,
                    classGame,
                    portrait,
                    stats: {
                        hp,
                        mp,
                        strength,
                        defence,
                        magic,
                        magicResist,
                        agility,
                        luck,
                        speed
                    }
                },
                ...state.slice(0 + 1)
            ]
        }
        case 'ALLY_LOSE_HP': {
            // return {
            //     ...state,
            //     stats: {
            //         ...state.stats,
            //         hp: hp - action.amount
            //     }
            // }
            const i = action.allyIndex;
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
        }
        default: {
            return state;
        }
    }
}