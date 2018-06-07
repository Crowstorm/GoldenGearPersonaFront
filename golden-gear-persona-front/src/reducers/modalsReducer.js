const modalDefaultState = {
    modalVisibility: false,
    content: null,

    //charCard
    charCardVisibility: false,
    dialogueVisibility: false,
    infoVisibility: false,

    //info text
    infoText: ''
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
            case 'SET_INFO_STATE':
            return{
                ...state,
                infoVisibility: action.visibility
            }
            case 'SET_INFO_TEXT':
            return{
                ...state,
                infoText: action.text
            }
        default:
            return state;
    }

}

export default modalReducer;