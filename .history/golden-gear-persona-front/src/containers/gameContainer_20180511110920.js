import React from 'react';
import {connect} from 'react-redux';

import {moveChar, moveCharUp, moveCharDown, moveCharRight, moveCharLeft} from '../actions/index'
import {changeLevel} from '../actions/mechanicsActions'
import {setDialogueState} from '../actions/modals'
import Game from '../components/overworld/game';
import OverworldInterface from '../components/overworld/overworldInterface'

class GameContainer extends React.Component {
    render() {
        return (
            <div>
                <OverworldInterface {...this.props}/>
                <Game {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(store){
    return{
        charPosition: store.charPosition,
        modals: store.modals,
        mechanics: store.mechanics,
        mainChar: store.mainChar
    }
}

function mapDispatchToProps(dispatch){
    return{
        moveCharUp: () =>{
            dispatch(moveCharUp())
        },
        moveCharDown: () =>{
            dispatch(moveCharDown())
        },
        moveCharRight: () =>{
            dispatch(moveCharRight())
        },
        moveCharLeft: () =>{
            dispatch(moveCharLeft())
        },
        setDialogueState: (visibility)=>{
            dispatch(setDialogueState(visibility));
        },
        changeLevel: (newLevel)=>{
            dispatch(changeLevel(newLevel));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);