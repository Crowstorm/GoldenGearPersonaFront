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
import Cave1 from './levels/cave1'
import Village from './levels/village'
import Corridor from './levels/corridor'
import CastleSecondFloor from './levels/castleSecondFloor'
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
import GuildInside from './levels/guildInside'
import Blacksmith from './levels/blacksmith'
import TownHall from './levels/townHall'
import Hall from './levels/hall'
import InnOutside from './levels/innOutside'
import PeasantsInside from './levels/peasantsInside'
import GroceryStore from './levels/groceryStore'
import Carnival from './levels/carnival'
import StorageOutside from './levels/storageOutside'
import StorageInside from './levels/storageInside'
import Park from './levels/park'
import MemorialPark from './levels/memorialPark'
import Graveyard from './levels/graveyard'
import GraveyardGhoul from './levels/graveyardGhoul'
import JailOutside from './levels/jailOutside'
import JailInside from './levels/jailInside'
import ArmoryOutside from './levels/armoryOutside'
import ArmoryInside from './levels/armoryInside'
import ChurchOutside from './levels/churchOutside'
import ChurchInside from './levels/churchInside'


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

                case "Cave Near Farm":{
                    return(
                        <Cave1 {...this.props} />
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

                case "Castle Second Floor":{
                    return(
                        <CastleSecondFloor {...this.props} />
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

                case "Grocery Store":{
                    return(
                        <GroceryStore {...this.props} />
                    )
                    break;
                }


                case "Peasants House":{
                    return(
                        <PeasantsHouse {...this.props} />
                    )
                    break;
                }

                case "Peasants Inside":{
                    return(
                        <PeasantsInside {...this.props} />
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

                case "Guild Inside":{
                    return(
                        <GuildInside {...this.props} />
                    )
                    break;
                }

                case "Carnival":{
                    return(
                        <Carnival {...this.props} />
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

                case "Hall":{
                    return(
                        <Hall {...this.props} />
                    )
                    break;
                }

                case "Inn Outside":{
                    return(
                        <InnOutside {...this.props} />
                    )
                    break;
                }

                case "Storage Outside":{
                    return(
                        <StorageOutside {...this.props} />
                    )
                    break;
                }

                case "Storage Inside":{
                    return(
                        <StorageInside {...this.props} />
                    )
                    break;
                }

                case "Park":{
                    return(
                        <Park {...this.props} />
                    )
                    break;
                }

                case "Memorial Park":{
                    return(
                        <MemorialPark {...this.props} />
                    )
                    break;
                }

                case "Graveyard":{
                    return(
                        <Graveyard {...this.props} />
                    )
                    break;
                }

                case "Ghoul Graveyard":{
                    return(
                        <GraveyardGhoul {...this.props} />
                    )
                    break;
                }

                case "Jail Outside":{
                    return(
                        <JailOutside {...this.props} />
                    )
                    break;
                }

                case "Jail Inside":{
                    return(
                        <JailInside {...this.props} />
                    )
                    break;
                }

                case "Armory Outside":{
                    return(
                        <ArmoryOutside {...this.props} />
                    )
                    break;
                }

                case "Armory Inside":{
                    return(
                        <ArmoryInside {...this.props} />
                    )
                    break;
                }

                case "Church Outside":{
                    return(
                        <ChurchOutside {...this.props} />
                    )
                    break;
                }

                case "Church Inside":{
                    return(
                        <ChurchInside {...this.props} />
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