import React from 'react';
import { connect } from 'react-redux';

import { moveChar, moveCharUp, moveCharDown, moveCharRight, moveCharLeft } from '../actions/index'
import { changeLevel, setCharacterPosition, pickUpItem, setQuest, startCombat, stopCombat } from '../actions/mechanicsActions'
import { addEnemy} from '../actions/enemyActions'
import { setDialogueState } from '../actions/modals'
import Game from '../components/overworld/game';
import OverworldInterface from '../components/overworld/overworldInterface';

import CombatContainer from './combatContainer';

class GameContainer extends React.Component {
    combat() {
        return (
            <CombatContainer {...this.props} />
        )
    }

    overworld() {
        return (
            <div>
                <OverworldInterface {...this.props} />
                <Game {...this.props} />
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);