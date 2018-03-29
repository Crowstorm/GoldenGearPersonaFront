import React from 'react';
import _ from 'lodash'

class InfoPanel extends React.Component{

    handleBattleWon(){
        if(this.props.enemies[0].hp <= 0){
            alert ('wygrałeś xD')
        }
    }

    // createTurnOrder = () =>{
    //     let fighters = [];
    //     const { enemies } = this.props;
    //     _.forEach(enemies, (enemy, index )=> {
    //         fighters.push(enemy);
    //     })
    //     fighters.push(this.props.mainChar);
    //     fighters.sort(function(a, b){
    //         return a.stats.speed-b.stats.speed
    //     })
    //     console.log('po sorcoe', fighters)

    //     //_.forEach(fighters, (fighter,index) =>{
    //    // })
    // }

    render(){
        
        return(
            <div className="align-self-end"style={{border: '1px solid blue', height: 200, width: 600, position: 'absolute', marginLeft: 200}}> 
                <p> Tura: {this.props.mechanics.turn} </p>
                <p> test: {this.props.mechanics.noOfEnemiesAttacked} </p>
            </div>
        )
    }
}

export default InfoPanel;