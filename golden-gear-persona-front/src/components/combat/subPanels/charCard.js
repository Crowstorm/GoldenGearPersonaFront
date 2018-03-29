import React from 'react';
import _ from 'lodash';

import './charCard.css'

import { setCharCardState } from '../../../actions/modals'

class CharCard extends React.Component {


    handleCloseCharCard() {
        this.props.setCharCardState(false);
    }
    // renderStats = () =>{
    //     let statsContainer = [hp, mp, strength, defence, magic, magicResist, agility, luck];
    //     return _.map(statsContainer, stat =>{
    //         return <p> '{stat}: {stat} </p>
    //     })
    // }

    render() {
        console.log(this.props)
        const { hp, mp, strength, defence, magic, magicResist, agility, luck, speed } = this.props.mainChar.stats
        const { name, title, classGame } = this.props.mainChar

        return (
            <div className="charCard d-flex flex-column">
                    <button onClick={() => this.handleCloseCharCard(false)}> close </button>

                <div className="charCardContainer">

                    <div className="portrait">
                        <img src={this.props.mainChar.portrait} style={{ height: 180 }} />
                    </div>

                    <div className="eqContainer">
                        <div className="d-flex justify-content-around align-items-center" style={{ height: 60, margin: 0 }}>
                            <div className="equippedItem"><img src={this.props.mainChar.eq.head} style={{ height: 40 }} /></div>

                        </div>
                        <div className=" d-flex justify-content-around align-items-center" style={{ height: 60, margin: 0 }}>
                            <div className="equippedItem"><img src={this.props.mainChar.eq.leftHand} style={{ height: 40 }} /></div>
                            <div className="equippedItem"><img src={this.props.mainChar.eq.chest} style={{ height: 40 }} /></div>
                            <div className="equippedItem"><img src={this.props.mainChar.eq.rightHand} style={{ height: 40 }} /></div>
                        </div>
                        <div className="d-flex justify-content-around align-items-center" style={{ height: 60, margin: 0 }}>
                            <div className="equippedItem"><img src={this.props.mainChar.eq.legs} style={{ height: 40 }} /></div>

                        </div>

                    </div>

                    <div>
                        <div className="statsCard d-flex flex-column justify-content-around align-items-center">
                            <p> Hp: {hp}, Mp: {mp} </p>
                            <p> Strength: {strength}, Defence: {defence}, Agility: {agility} </p>
                            <p> Magic: {magic}, Magic Resist: {magicResist}, Luck: {luck}, Speed: {speed} </p>
                        </div>

                        <div className="nameCard d-flex flex-column justify-content-around align-items-center">
                            <p> Name: {name} </p>
                            <p> Title: {title} </p>
                            <p> Class: {classGame}</p>
                        </div>
                    </div>

                        <div id="eq">
                            <div id="armor">Tu beda zbroje</div>
                            <div id="weapon">To bedzie bron</div>
                            <div ></div>
                            <div id="questitems">To beda questowe przedmioty</div>
                            <div id="consumables">Tu beda potiony, scrolle, etc</div>
                        </div>

                </div>
            </div>
        )
    }
}

export default CharCard;