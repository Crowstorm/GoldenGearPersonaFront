import React from 'react';
import { connect } from 'react-redux'

import CombatScreen from '../components/combat/combatScreen'
import AllyInterface from '../components/combat/allyInterface'
import EnemyInterface from '../components/combat/enemyInterface'
import InfoPanel from '../components/combat/infoPanel'
import CharCard from '../components/combat/subPanels/charCard'


import {fetchCharacter} from '../actions';
import {setCharCardState} from '../actions/modals'

class CombatContainer extends React.Component {

    render() {
        let renderCharCard = this.props.charCard.charCardVisibility ? <CharCard {...this.props}/> : null;
        return (
            <div className="d-flex justify-content-between ">
                <AllyInterface {...this.props}/>
                <CombatScreen />
                <InfoPanel />
                <EnemyInterface />
                {/* conditional components */}
                {renderCharCard}
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        mainChar: store.mainCharacter,
        charCard: store.modals
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCharacter: () => {
            dispatch(fetchCharacter())
        },
        setCharCardState: (visibility) =>{
            dispatch(setCharCardState(visibility))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatContainer);