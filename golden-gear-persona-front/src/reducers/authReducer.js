let initial_state = {
    name: null
}

export default (state = initial_state, action) => {

    switch (action.type) {
        // case UPDATE_DB_COORDS:{
        //     return Object.assign({}, state, {
        //         dbLat: action.dbLat,
        //         dbLon: action.dbLon
        //     })
        // }

        default: {
            return state;
        }
    }
}