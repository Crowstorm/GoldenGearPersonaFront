import React from 'react';

class InfoPanel extends React.Component{

    handleBattleWon(){
        console.log('propsy info', this.props.enemies)
        if(this.props.enemies[0].hp <= 0){
            alert ('wygrałeś xD')
        }
    }
    render(){
        let gowno = this.handleBattleWon();
        return(
            <div className="align-self-end"style={{border: '1px solid blue', height: 200, width: 600, position: 'absolute', marginLeft: 200}}> 
                <p> Tura: {this.props.mechanics.turn} </p>
                {gowno}
            </div>
        )
    }
}

export default InfoPanel;