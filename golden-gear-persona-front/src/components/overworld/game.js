import React from 'react';
import _ from 'lodash';
import './game.css';
import princess from '../assets/princess2.png'

//grid generator
import GridGenerator from '../extraInterfaces/gridGenerator';
//levels
import ThroneRoom from './levels/throneRoom'
import CastleRoad from './levels/castleRoad';
import Inn from './levels/inn'
import ToFarm from './levels/toFarm'
import Village from './levels/village'
import Corridor from './levels/corridor'
import OutsideCastle from './levels/outsideCastle'
//lista zablokowanych pol
// const BLOCKED = [

// ]

class Game extends React.Component {
    render() {
        console.log(this.props.mechanics.currentLevel, 'propsy');
        let levelRenderer = () => {
            switch (this.props.mechanics.currentLevel) {
                case "ThroneRoom":{
                    return (
                        <ThroneRoom {...this.props} />
                    )
                    break;
                }    
                break;  
                
                case "CastleRoad":{
                    return(
                        <CastleRoad {...this.props} />
                    )
                    break;
                }  
                break;
                case "Inn":{
                    return(
                        <Inn {...this.props} />
                    )
                    break;
                }     
                case "ToFarm":{
                    return(
                        <ToFarm {...this.props} />
                    )
                    break;
                }
                case "Village":{
                    return(
                        <Village {...this.props} />
                    )
                    break;
                }
                case "Corridor":{
                    return(
                        <Corridor {...this.props} />
                    )
                    break;
                }
                case "OutsideCastle":{
                    return(
                        <OutsideCastle {...this.props} />
                    )
                    break;
                }
                default: { return }     
            }
            
        }

        return (
            <div className="game" style={{ position: 'relative' }}>

                {/* <div>
                    <p style={{color: 'black'}}>Obecna pozycja: {this.props.charPosition.x}, {this.props.charPosition.y} </p>
                </div>
                 */}
                {levelRenderer()}
                 <GridGenerator /> 

            </div>
        )
    }
}

export default Game;