import React from 'react';
import _ from 'lodash';
import './styles.css'
//import './game.css';
import princess from '../../assets/princess2.png';
import king from '../../assets/king_small.png';
import queen from '../../assets/queen_small2.png';

import king_portrait from '../../assets/king.png';
import queen_portrait from '../../assets/queen.png';



import Dialogue from '../../extraInterfaces/dialogue';

import { GRID_ThroneRoom, BLOCKED_ThroneRoom } from '../grids'

class ThroneRoom extends React.Component {


    //Funckja ktora zwraca img z ludzikiem
    renderPosition = (cell) => {
        if (this.props.charPosition.x === cell.x && this.props.charPosition.y === cell.y) {
            return <img src={this.props.charPosition.model} style={{ height: 40, transform: 'translateY(-10px)' }} />;
        }
    }

    //Funkcja, ktora leci po kazdym rzadku i po kazdej komorce rzadku. Nadaje im odpowiednie atrybuty i ma w sobie funkcje powyzej, ktora uaktywnia sie kiedy pozycja w stanie aplikacji
    //zgadza sie z x i y komorki
    renderGrid() {
        return _.map(GRID_ThroneRoom, row => {
            return <div key={`row${row[0].y}`} className="row" style={{ margin: 0 }}> {_.map(row, cell => {
                return <div key={cell.x + '.' + cell.y} id={'d' + cell.x + '_' + cell.y} style={{ height: 32, width: 32, boxSizing: 'border-box' }}> {/*x: {cell.x}, y: {cell.y} */} {this.renderPosition(cell)} </div>
            })
            } </div>
        })
    }

    //Funkcja "nasluchujaca" klikniesz klawiszem. Gora dol, lewo prawo
    handleKeyDown = (e) => {
        console.log(e);
        var d = new Date();
        console.log(d);
        switch (e.key) {
            case "ArrowUp": {
                let err = [];

                _.forEach(BLOCKED_ThroneRoom, cell => {
                    if (this.props.charPosition.y + 1 === cell.y && this.props.charPosition.x === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharUp();
                }
                break;
            }
            case "ArrowDown": {
                let err = [];

                _.forEach(BLOCKED_ThroneRoom, cell => {
                    if (this.props.charPosition.y - 1 === cell.y && this.props.charPosition.x === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharDown();
                }
                break;
            }
            case "ArrowLeft": {
                let err = [];

                _.forEach(BLOCKED_ThroneRoom, cell => {
                    if (this.props.charPosition.y === cell.y && this.props.charPosition.x - 1 === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharLeft();
                }
                break;
            }
            case "ArrowRight": {
                let err = [];

                _.forEach(BLOCKED_ThroneRoom, cell => {
                    if (this.props.charPosition.y === cell.y && this.props.charPosition.x + 1 === cell.x) {
                        console.log('blocked')
                        err.push('blocked');
                    }
                })
                if (err.length === 0) {
                    this.props.moveCharRight();
                }
                break;
            }
            case 'Enter': {
                if ((this.props.charPosition.x === 11 && this.props.charPosition.y === 16) || (this.props.charPosition.x === 12 && this.props.charPosition.y === 16)) {
                    const ziomek = {
                        name: 'Stupid Boy',
                        portrait: 'https://d1u5p3l4wpay3k.cloudfront.net/crafttheworld_gamepedia/b/b8/Beholder.png',
                        stats: {
                            hp: 2,
                            mp: 0,
                            defence: 5,
                            agility: 7,
                            speed: 12,
                            strength: 5
                        }
                    }
                    this.props.setDialogueState(true);
                    // this.props.addEnemy(ziomek);
                    // this.props.addEnemy(ziomek);
                    // this.props.startCombat();
                    this.props.setQuest('Save the Princess');
                    
                    // document.removeEventListener("keydown", this.handleKeyDown);
                }
                if ((this.props.charPosition.x === 12 && this.props.charPosition.y === 2) || (this.props.charPosition.x === 11 && this.props.charPosition.y === 2)) {
                    document.removeEventListener("keydown", this.handleKeyDown);
                    this.props.setCharacterPosition(12, 23);
                    this.props.changeLevel('Corridor');
                }
                if (this.props.charPosition.x === 12 && this.props.charPosition.y === 3) {
                    this.props.setInfoText('Ja pierniczę, działa');
                    this.props.setInfoState(true);
                }
                break;
            }
            default: { return }
        }
    }

    componentDidMount() {

        document.addEventListener("keydown", this.handleKeyDown);
        const img = { height: '35px' }
        // document.getElementById('d12_16').innerHTML = `<img src=${princess} />`
        document.getElementById('d11_17').innerHTML = `<img src=${queen} />`
        document.getElementById('d12_17').innerHTML = `<img src=${king} />`

    }


    render() {
        const dialogue = [
            { text: "Thank you for coming. As you already heard, the princess had been kidnapped.", name: "King Horace" },
            { text: "And in this time of need we know that we can count on you.", name: "King Horace" },
            { text: "We've already sent our best men, but the truth is anyone could be involved in her disappearance.", name: "King Horace" },
            { text: "It is to our understanding that you care deeply for our daughter. If you save her you shall be offered her hand.", name: "King Horace" },
            { text: "Essentialy making you the Prince of the Realm.", name: "King Horace" },
            { text: "She was last seen on the streets near the Inn. That's not the first time something bad happened there. During the night bandits are patrolling this area.", name: "King Horace" },
            { text: "Now go, my friend, and save the Princess. Time might be running short.", name: "King Horace" }
        ]

        

        console.log(this.props);
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? <Dialogue dialogue={dialogue} /> : '';
        return (
            <div id="ThroneRoom">
                {dialogueRenderer}
                <div onKeyDown={this.handleKeyDown} style={{ width: 800 }}>
                    {this.renderGrid()}
                </div>
            </div>
        )
    }
}

export default ThroneRoom;