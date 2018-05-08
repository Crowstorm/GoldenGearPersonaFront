import {SET_CHAR_CARD_STATE} from './types'

export const setCharCardState = (visibility) => ({
    type: 'SET_CHAR_CARD_STATE',
    visibility
})

export const setDialogueState = (visibility) => ({
    type: 'SET_DIALOGUE_STATE',
    visibility
})