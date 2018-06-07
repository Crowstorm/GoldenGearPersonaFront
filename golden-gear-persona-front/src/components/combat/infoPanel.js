import React from 'react';
import _ from 'lodash'

import './combat.css'

class InfoPanel extends React.Component{

    // handleBattleWon(){
    //     if(this.props.enemies[0].hp <= 0){
    //         this.props.stopCombat();
    //         // alert ('wygrałeś xD')
    //     }
    // }

    handleDmgInfo = () =>{
        let test = _.map(this.props.mechanics.infoArray, (raport) =>{
            console.log(raport)
            return <div> {raport} </div>
        });
        return(
            <div className="d-flex flex-column"> {test} </div>
        )
    }

    render(){
        // console.log('propsy kombatu info', this.props)
        let renderDmgInfo = this.handleDmgInfo();
        return(
            <div id='infoPanel' className="align-self-end d-flex justify-content-center align-items-center flex-column"style={{border: '1px solid blue', height: 200, width: 600, position: 'absolute', marginLeft: 200, overflowY:'auto'}}> 
                <p> Tura: {this.props.mechanics.turn} </p>
                {/* <p> {this.props.mechanics.infoArray} </p> */}
                {renderDmgInfo}
            </div>
        )
    }
}

export default InfoPanel;