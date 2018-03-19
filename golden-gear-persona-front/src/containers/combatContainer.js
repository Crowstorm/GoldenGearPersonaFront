import React from 'react';
import { connect } from 'react-redux'

import CombatScreen from '../components/combat/combatScreen'
import AllyInterface from '../components/combat/allyInterface'
import EnemyInterface from '../components/combat/enemyInterface'
import InfoPanel from '../components/combat/infoPanel'


import {fetchCharacter} from '../actions';

class CombatContainer extends React.Component {

    render() {
        return (
            <div className="d-flex justify-content-between ">
                <AllyInterface {...this.props}/>
                <CombatScreen />
                <InfoPanel />
                <EnemyInterface />
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
        mainChar: store.mainCharacter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCharacter: () => {
            dispatch(fetchCharacter())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CombatContainer);