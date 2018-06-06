import { FETCH_CHARACTER } from "../actions/types";
import * as items from './items';
import * as skills from './skills'

let initial_state = [
    {
        name: null,
        title: null,
        classGame: null,
        portrait: null,
        stats: {
            maxHp:25,
            hp: 25,
            maxMp: null,
            mp: null,
            strength: null,
            defence: null,
            magic: null,
            magicResist: null,
            agility: null,
            luck: null,
            speed: null,
        },
        quest: null,
        eq: {
            head: 'https://i.pinimg.com/originals/2e/a8/51/2ea851e26242a29461b14ec21004dfe2.png',
            chest: 'http://piq.codeus.net/static/media/userpics/piq_65251_400x400.png',
            leftHand: 'https://vignette.wikia.nocookie.net/teoria/images/3/39/Piq_68684_400x400.png/revision/latest?cb=20160723153739&path-prefix=pl',
            rightHand: 'https://i.pinimg.com/originals/8b/99/48/8b9948f230b107327413d56e3d83b744.png',
            legs: 'https://orig00.deviantart.net/ba0b/f/2015/019/7/8/minecraft_leather_pants_by_dragonshadow3-d8ekmni.png'
        },
        skills: [
            skills.backstab,
            skills.heal
        ],
        magic: [
            skills.heal
        ],
        consumables: [
            items.healingPotion,
            items.manaPotion
        ]
    },
    {
        name: 'Tanukher',
        title: 'Brak',
        classGame: 'warrior',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/6/6b/Haru_All_Out.png/revision/latest?cb=20170202222551',
        stats: {
            maxHp: 30,
            hp: 30,
            maxMp:10,
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
        },
        skills: [
            skills.backstab,
        ],
        magic: [
            skills.heal
        ]
    },
    {
        name: 'Setsuna',
        title: 'Brak',
        classGame: 'healer',
        portrait: 'https://i.pinimg.com/originals/dc/d7/47/dcd7478c648772f151db89da329e0a25.png',
        stats: {
            maxHp:15,
            hp: 15,
            maxMp: 30,
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
        },
        skills: [
            skills.backstab
        ],
        magic: [

        ]
    },
    {
        name: 'Miserion',
        title: 'Brak',
        classGame: 'warrior',
        portrait: 'https://vignette.wikia.nocookie.net/megamitensei/images/2/25/Ann_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202221932',
        stats: {
            maxHp: 20,
            hp: 20,
            maxMp: 25,
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
        },
        skills: [
            skills.backstab
        ],
        magic: [

        ]
    },
];

export default (state = initial_state, action) => {
    switch (action.type) {
        case FETCH_CHARACTER: {
            const { name, title, classGame, portrait, statistics } = action.payload;
            const { hp, mp, strength, defence, magic, magicResist, agility, luck, speed, maxHp, maxMp } = statistics;
            return [
                ...state.slice(0, 0),
                {
                    ...state[0],
                    name: name,
                    title,
                    classGame,
                    portrait,
                    stats: {
                        maxHp,
                        hp,
                        maxMp,
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
        case 'ALLY_RESTORE_HP': {
            const whoToHeal = action.whoToHealIndex;
            return [
                ...state.slice(0, whoToHeal),
                {
                    ...state[whoToHeal],
                    stats: {
                        ...state[whoToHeal].stats,
                        hp: state[whoToHeal].stats.hp + action.amount
                    }
                },
                ...state.slice(whoToHeal +1)
            ]
        }
        case 'ALLY_DIED':{
            let j  = action.i;
            return [
                ...state.slice(0, j),
                ...state.slice(j + 1)
            ]
        }
        case 'CONSUMABLE_USED':{
            return
        }
        case 'ITEM_PICK_UP':{
            console.log(action)
            return [
                ...state.slice(0, 0),
                {
                    ...state[0],
                    consumables:[
                        ...state[0].consumables,
                        items[`${action.item}`]
                    ]
                },
                ...state.slice(1)
            ]
        }
        case 'SET_QUEST':{
            return[
                ...state.slice(0,0),
                {
                    ...state[0],
                    quest: action.quest
                },
                ...state.slice(1)
            ]
        }

        case 'LEVEL_UP1':{
            return [
                ...state.slice(0, 0),
                {
                    ...state[0],
                    stats: {
                        ...state[0].stats,
                        maxHp: state[0].stats.maxHp +1,
                        hp: state[0].stats.hp +1,
                        maxMp: state[0].stats.maxMp +1,
                        mp: state[0].stats.mp +1,
                        strenght: state[0].stats.strength +1,
                        agility: state[0].stats.agility +1,
                        defence: state[0].stats.defence +1,
                        magic: state[0].stats.magic +1,
                        magicResist: state[0].stats.magicResist +1,
                        luck: state[0].stats.luck +1,
                        speed: state[0].stats.speed +1,
                        defence: state[0].stats.defence +1,
                    }
                },
                ...state.slice(0 + 1)
            ]
        }

        case 'LEVEL_UP2':{
            return [
                ...state.slice(0, 1),
                {
                    ...state[1],
                    stats: {
                        ...state[1].stats,
                        maxHp: state[1].stats.maxHp +1,
                        hp: state[1].stats.hp +1,
                        maxMp: state[1].stats.maxMp +1,
                        mp: state[1].stats.mp +1,
                        strenght: state[1].stats.strength +1,
                        agility: state[1].stats.agility +1,
                        defence: state[1].stats.defence +1,
                        magic: state[1].stats.magic +1,
                        magicResist: state[1].stats.magicResist +1,
                        luck: state[1].stats.luck +1,
                        speed: state[1].stats.speed +1,
                        defence: state[1].stats.defence +1,
                    }
                },
                ...state.slice(1 + 1)
            ]
        }

        case 'LEVEL_UP3':{
            return [
                ...state.slice(0, 2),
                {
                    ...state[2],
                    stats: {
                        ...state[2].stats,
                        maxHp: state[2].stats.maxHp +1,
                        hp: state[2].stats.hp +1,
                        maxMp: state[2].stats.maxMp +1,
                        mp: state[2].stats.mp +1,
                        strenght: state[2].stats.strength +1,
                        agility: state[2].stats.agility +1,
                        defence: state[2].stats.defence +1,
                        magic: state[2].stats.magic +1,
                        magicResist: state[2].stats.magicResist +1,
                        luck: state[2].stats.luck +1,
                        speed: state[2].stats.speed +1,
                        defence: state[2].stats.defence +1,
                    }
                },
                ...state.slice(2 + 1)
            ]
        }

        case 'LEVEL_UP4':{
            return [
                ...state.slice(0, 3),
                {
                    ...state[3],
                    stats: {
                        ...state[3].stats,
                        maxHp: state[3].stats.maxHp +1,
                        hp: state[3].stats.hp +1,
                        maxMp: state[3].stats.maxMp +1,
                        mp: state[3].stats.mp +1,
                        strenght: state[3].stats.strength +1,
                        agility: state[3].stats.agility +1,
                        defence: state[3].stats.defence +1,
                        magic: state[3].stats.magic +1,
                        magicResist: state[3].stats.magicResist +1,
                        luck: state[3].stats.luck +1,
                        speed: state[3].stats.speed +1,
                        defence: state[3].stats.defence +1,
                    }
                },
                ...state.slice(3 + 1)
            ]
        }
        default: {
            return state;
        }
    }
}