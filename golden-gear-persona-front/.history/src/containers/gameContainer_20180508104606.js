import React from 'react';
import {connect} from 'react-redux';

import {moveChar, moveCharUp, moveCharDown, moveCharRight, moveCharLeft} from '../actions/index'
import {setDialogueState} from '../actions/modals'
import Game from '../components/overworld/game';
import OverworldInterface from '../components/overworld/overworldInterface'

class GameContainer extends React.Component {
    render() {
        return (
            <div>
                <OverworldInterface />
                <Game {...this.props}/>
            </div>
        )
    }
}

function mapStateToProps(store){
    return{
        charPosition: store.charPosition,
        modals: store.modals
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);