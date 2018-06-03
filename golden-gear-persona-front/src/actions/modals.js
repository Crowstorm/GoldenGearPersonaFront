import {SET_CHAR_CARD_STATE} from './types'

export const setCharCardState = (visibility) => ({
    type: 'SET_CHAR_CARD_STATE',
    visibility
})

export const setDialogueState = (visibility) => ({
    type: 'SET_DIALOGUE_STATE',
    visibility
})

export const setInfoState = (visibility) => ({
    type: 'SET_INFO_STATE',
    visibility
})

export const setInfoText = (text) => ({
    type: 'SET_INFO_TEXT',
    text
})