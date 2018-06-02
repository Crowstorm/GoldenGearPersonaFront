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
import TownNorthEnter from './levels/townNorthEnter'
import ForestNearBeach from './levels/forestNearBeach'
import UpperBeach from './levels/upperBeach'
import LowerBeach from './levels/lowerBeach'
import RoadToBeach from './levels/roadToBeach'
import Campfire from './levels/campfire'
import NorthGate from './levels/northGate'
import PeasantsHouse from './levels/peasantsHouse'
import WestGate from './levels/westGate'
import GuildOutside from './levels/guildOutside'
import Blacksmith from './levels/blacksmith'
import TownHall from './levels/townHall'
import InnOutside from './levels/innOutside'
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
                case "Town North Enter":{
                    return(
                        <TownNorthEnter {...this.props} />
                    )
                    break;
                }

                case "Forest Near Beach":{
                    return(
                        <ForestNearBeach {...this.props} />
                    )
                    break;
                }

                case "Upper Beach":{
                    return(
                        <UpperBeach {...this.props} />
                    )
                    break;
                }

                case "Lower Beach":{
                    return(
                        <LowerBeach {...this.props} />
                    )
                    break;
                }

                case "Road To Beach":{
                    return(
                        <RoadToBeach {...this.props} />
                    )
                    break;
                }

                case "Campfire":{
                    return(
                        <Campfire {...this.props} />
                    )
                    break;
                }

                case "North Gate":{
                    return(
                        <NorthGate {...this.props} />
                    )
                    break;
                }

                case "Peasants House":{
                    return(
                        <PeasantsHouse {...this.props} />
                    )
                    break;
                }

                case "West Gate":{
                    return(
                        <WestGate {...this.props} />
                    )
                    break;
                }

                case "Guild Outside":{
                    return(
                        <GuildOutside {...this.props} />
                    )
                    break;
                }

                case "Blacksmith":{
                    return(
                        <Blacksmith {...this.props} />
                    )
                    break;
                }

                case "Town Hall":{
                    return(
                        <TownHall {...this.props} />
                    )
                    break;
                }

                case "Inn Outside":{
                    return(
                        <InnOutside {...this.props} />
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