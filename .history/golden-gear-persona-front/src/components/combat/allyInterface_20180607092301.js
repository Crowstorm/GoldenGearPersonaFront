import React from 'react'
import _ from 'lodash'

import './combat.css'


class AllyInterface extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter();
    }

    handleOpenCharCard = (index) => {
        this.props.setCharacterIndex(index);
        this.props.setCharCardState(true)
    }

    characterInteraction = (index) =>{
        if(!this.props.mechanics.healReady){
            this.handleOpenCharCard(index);
        }
    }

    getCharactersForCombat = () => {
        const { mainChar } = this.props;
        return _.map(mainChar, (character, index) => {
            return (
                <div className="d-flex flex-column flex-row" onClick={() => this.characterInteraction(index)}>
                    <p className="d-flex justify-content-center align-items-center" style={{ marginTop: 15 }}>{character.name}</p>
                    <img src={character.portrait} style={{ height: 100, width: 100, border: '3px solid green' }} />
                    <p className="d-flex justify-content-center" style={{ marginTop: 10 }}> Hp: {character.stats.hp} Mp: {character.stats.mp} </p>
                </div>
            )
        })
    }

    render() {
        let renderCharacters = this.props.mainChar ? this.getCharactersForCombat() : 'Loading';
        return (
            <div id="allyInterface" style={{ float: 'left', width: 200, height: 800 }}>
                <div className="container d-flex justify-content-center flex-column">
                    {renderCharacters}
                </div>
            </div>
        )
    }
}


export default AllyInterface;