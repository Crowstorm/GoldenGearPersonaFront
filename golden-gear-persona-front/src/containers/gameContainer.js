import React from 'react';
import { connect } from 'react-redux';

import { moveChar, moveCharUp, moveCharDown, moveCharRight, moveCharLeft } from '../actions/index'
import { changeLevel, setCharacterPosition, pickUpItem, setQuest, startCombat, stopCombat, questStatus } from '../actions/mechanicsActions'
import { addEnemy} from '../actions/enemyActions'
import {healEveryone} from '../actions/allyActions'
import { setDialogueState, setInfoState, setInfoText } from '../actions/modals'


import Game from '../components/overworld/game';
import OverworldInterface from '../components/overworld/overworldInterface';
import CombatContainer from './combatContainer';
import Info from '../components/extraInterfaces/info'

class GameContainer extends React.Component {
    combat() {
        return (
            <CombatContainer {...this.props} />
        )
    }

    overworld() {
        let infoRenderer = (this.props.modals.infoVisibility) ? <Info {...this.props} /> : ''
        return (
            <div>
                <OverworldInterface {...this.props} />
                <Game {...this.props} />
                {/* <Info {...this.props} /> */}
                {infoRenderer}
            </div>
        )
    }
    render() {
        console.log('calosc', this.props);
        let screenRenderer = (this.props.mechanics.combat) ? this.combat() : this.overworld()
        return (
            <div>
                {screenRenderer}
                {/* <OverworldInterface {...this.props}/>
                <Game {...this.props}/> */}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        charPosition: store.charPosition,
        modals: store.modals,
        mechanics: store.mechanics,
        mainChar: store.mainChar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        moveCharUp: () => {
            dispatch(moveCharUp())
        },
        moveCharDown: () => {
            dispatch(moveCharDown())
        },
        moveCharRight: () => {
            dispatch(moveCharRight())
        },
        moveCharLeft: () => {
            dispatch(moveCharLeft())
        },
        setDialogueState: (visibility) => {
            dispatch(setDialogueState(visibility));
        },
        changeLevel: (newLevel) => {
            dispatch(changeLevel(newLevel));
        },
        setCharacterPosition: (x, y) => {
            dispatch(setCharacterPosition(x, y));
        },
        pickUpItem: (item) => {
            dispatch(pickUpItem(item));
        },
        setQuest: (quest) => {
            dispatch(setQuest(quest));
        },
        startCombat: () => {
            dispatch(startCombat());
        },
        stopCombat: () => {
            dispatch(stopCombat());
        },
        addEnemy: (enemy)=>{
            dispatch(addEnemy(enemy));
        },
        setInfoState: (visibility) => {
            dispatch(setInfoState(visibility));
        },
        setInfoText: (text) =>{
            dispatch(setInfoText(text));
        },
        questStatus: (name, status) =>{
            dispatch(questStatus(name, status))
        },
        healEveryone: ()=>{
            dispatch(healEveryone());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);