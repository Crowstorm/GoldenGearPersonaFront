const modalDefaultState = {
    modalVisibility: false,
    content: null,

    //charCard
    charCardVisibility: false,
    dialogueVisibility: true
}

const modalReducer = (state = modalDefaultState, action) => {
    switch (action.type) {
        case 'SET_CHAR_CARD_STATE':
            return{
                ...state,
                charCardVisibility: action.visibility
            }
            case 'SET_DIALOGUE_STATE':
            return{
                ...state,
                dialogueVisibility: action.visibility
            }
        default:
            return state;
    }

}

export default modalReducer;