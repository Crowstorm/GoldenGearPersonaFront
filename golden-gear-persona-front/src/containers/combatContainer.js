import React from 'react';
import { connect } from 'react-redux'
import _ from 'lodash';


import CombatScreen from '../components/combat/combatScreen'
import AllyInterface from '../components/combat/allyInterface'
import EnemyInterface from '../components/combat/enemyInterface'
import InfoPanel from '../components/combat/infoPanel'
import CharCard from '../components/combat/subPanels/charCard'

import {fetchCharacter} from '../actions';
import {setCharCardState} from '../actions/modals';
import {loseHP} from '../actions/enemyActions';
import {allyLoseHP} from '../actions/allyActions';
import {attackReady, switchTurn,incrementEnemiesAttacked, combatStart} from '../actions/mechanicsActions';

class CombatContainer extends React.Component {
   componentDidMount(){
       this.props.combatStart();
   }

    render() {
        let renderCharCard = this.props.charCard.charCardVisibility ? <CharCard {...this.props}/> : null;

        //this.createTurnOrder();
        return (
            <div className="d-flex justify-content-between ">
                <AllyInterface {...this.props}/>
                <CombatScreen {...this.props}/>
                <InfoPanel {...this.props}/>
                <EnemyInterface {...this.props}/>
                {/* conditional components */}
                {renderCharCard}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        mainChar: store.mainCharacter,
        enemies: store.enemy,
        charCard: store.modals,
        mechanics: store.mechanics
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCharacter: () => {
            dispatch(fetchCharacter())
        },
        setCharCardState: (visibility) =>{
            dispatch(setCharCardState(visibility))
        },
        loseHP: (amount, index) =>{
            dispatch(loseHP(amount, index))
        },
        allyLoseHP: (amount) =>{
            dispatch(allyLoseHP(amount))
        },
        attackReady: (isReady) =>{
            dispatch(attackReady(isReady))
        },
        switchTurn: (whoseTurn) =>{
            dispatch(switchTurn(whoseTurn))
        },
        incrementEnemiesAttacked: () =>{
            dispatch(incrementEnemiesAttacked())
        },
        combatStart: () =>{
            dispatch(combatStart())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatContainer);