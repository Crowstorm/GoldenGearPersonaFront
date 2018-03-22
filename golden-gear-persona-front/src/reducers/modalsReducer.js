const modalDefaultState = {
    modalVisibility: false,
    content: null,

    //charCard
    charCardVisibility: false,
}

const modalReducer = (state = modalDefaultState, action) => {
    switch (action.type) {
        case 'SET_CHAR_CARD_STATE':
            return{
                ...state,
                charCardVisibility: action.visibility
            }
        default:
            return state;
    }

}

export default modalReducer;