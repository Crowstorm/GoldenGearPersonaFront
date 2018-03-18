import { FETCH_CHARACTER } from "../actions/types";

let initial_state = {
    name: null,
    title: null,
    classGame: null,
    portrait: null,
    stats: {
        hp: null,
        mp: null,
        strength: null,
        defence: null,
        magic: null,
        magicResist: null,
        agility: null,
        luck: null
    }
};

export default (state = initial_state, action) => {

    switch (action.type) {
        case FETCH_CHARACTER: {
            const{name, title,classGame, portrait, statistics } = action.payload;
            const {hp, mp, strength, defence, magic, magicResist, agility, luck} = statistics;
            return Object.assign({}, state, {
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
                    luck,                }
            })
        }

        default: {
            return state;
        }
    }
}