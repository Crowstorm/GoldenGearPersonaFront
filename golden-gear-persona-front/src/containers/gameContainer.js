import React from 'react';
import {connect} from 'react-redux';

import {moveChar, moveCharUp} from '../actions/index'
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
        charPosition: store.charPosition
    }
}

function mapDispatchToProps(dispatch){
    return{
        moveChar: (x, y) =>{
            dispatch(moveChar(x,y));
        },
        moveCharUp: () =>{
            dispatch(moveCharUp())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);