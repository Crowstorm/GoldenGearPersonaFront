import React from 'react';
import _ from 'lodash';
import AttackInterface from './subPanels/attackInterface';

import './combat.css'

import necromancer from '../assets/necro.png'
import beholder from '../assets/beholderCombat.png'
import background from '../assets/battleBackground.png'

import mainCharCombat from '../assets/mainCharCombat.gif';
import healerCombat from '../assets/healerCombat.gif';


class CombatScreen extends React.Component {


    getAllyTurnInterface = () => {
        return (
            <AttackInterface {...this.props} />
        )
    }

    render() {
        //    let renderAllyAttackOptions = (this.props.mechanics.turn === "ally") ? 'ally' : "enemy";
        let i = this.props.mechanics.attackingAllyIndex
        let renderAllyTurnInterface = (this.props.mechanics.turn === 'ally') ? this.getAllyTurnInterface() : null

        let renderMainChar = () =>{
            // if(this.props.mainChar[0]){
                return(
                    <img src={mainCharCombat}
                    style={{ height: "100px", position: 'absolute', left: '11px', top: '30px' }} />
                )
            // } else {
            //     return (
            //         <img src={mainCharCombat}
            //         style={{ height: "100px", position: 'absolute', left: '11px', top: '30px' }} />                )
            // }
        }

        let  renderThanuker = () =>{
            // if(this.props.mainChar[1].name ==='Setsuna'){
                return(
                    <img src={healerCombat}
                    style={{ height: "100px", position: 'absolute', left: '11px', top: '160px' }} />
                )
        //     } else {
        //         return (
        //             <img src={mainCharCombat}
        //             style={{ height: "100px", position: 'absolute', left: '11px', top: '160px' }} />
        //         )
        //     }
         }

       let  renderSetsuna = () =>{
            // if(this.props.mainChar[2].name ==='Setsuna'){
                return(
                    <img src={healerCombat}
                    style={{ height: "100px", position: 'absolute', left: '11px', top: '290px' }} />
                )
            // } else {
            //     return (
            //         <img src={mainCharCombat}
            //         style={{ height: "100px", position: 'absolute', left: '11px', top: '290px' }} />
            //     )
            // }
        }

        let renderMiserion = () => {
            // if (this.props.mainChar[3].name === 'Setsuna') {
                return (
                    <img src={healerCombat}
                        style={{ height: "100px", position: 'absolute', left: '11px', top: '420px' }} />
                )
            // } else {
            //     return (
            //         <img src={mainCharCombat}
            //             style={{ height: "100px", position: 'absolute', left: '11px', top: '420px' }} />
            //     )
            // }
        }

        return (
            <div id="combatScreen" className="d-flex flex-wrap align-content-center justify-content-center" style={{ border: '1px solid blue', height: 600, width: 600, position: 'relative', backgroundImage: { background } }}>
                
                {/* <img src={mainCharCombat}
                    style={{ height: "100px", position: 'absolute', left: '11px', top: '30px' }} /> */}
                
                {renderMainChar()}
                {renderThanuker()}
                {renderSetsuna()}    
                {renderMiserion()}

                <img src={beholder}
                    style={{ height: "100px", position: 'absolute', left: '520px', top: '30px' }} />
                <img src={beholder}
                    style={{ height: "100px", position: 'absolute', left: '520px', top: '160px' }} />
                <img src={beholder}
                    style={{ height: "100px", position: 'absolute', left: '520px', top: '290px' }} />
                <div className="d-flex ">
                    {/* <button onClick={() => this.handleEnemyAttack()}> Enemy Attack </button> */}
                </div>
                {renderAllyTurnInterface}
            </div>
        )
    }
}

export default CombatScreen;