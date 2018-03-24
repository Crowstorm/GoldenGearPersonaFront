import React from 'react';
import { connect } from 'react-redux'

import CombatScreen from '../components/combat/combatScreen'
import AllyInterface from '../components/combat/allyInterface'
import EnemyInterface from '../components/combat/enemyInterface'
import InfoPanel from '../components/combat/infoPanel'
import CharCard from '../components/combat/subPanels/charCard'

import {fetchCharacter} from '../actions';
import {setCharCardState} from '../actions/modals';
import {loseHP} from '../actions/enemyActions';
import {allyLoseHP} from '../actions/allyActions';
import {attackReady} from '../actions/mechanicsActions';

class CombatContainer extends React.Component {

    render() {
        console.log('zycie', this.props.mainChar.stats.hp);
        let renderCharCard = this.props.charCard.charCardVisibility ? <CharCard {...this.props}/> : null;
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
        loseHP: (amount) =>{
            dispatch(loseHP(amount))
        },
        allyLoseHP: (amount) =>{
            dispatch(allyLoseHP(amount))
        },
        attackReady: (isReady) =>{
            dispatch(attackReady(isReady))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatContainer);