import React from 'react'


class AllyInterface extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter();
    }

    getMainCharInfo = () => {
        const {name, portrait } = this.props.mainChar;
        return (
            <div>
                <p>{name}</p>
                <img src={portrait} style={{height: 100}}/>
                <p> Hp: {this.props.mainChar.stats.hp} </p>
            </div>
        )
    }


    render() {
        console.log('propsy', this.props)


        let renderMainCharInfo = this.props.mainChar ? this.getMainCharInfo() : 'lol'
        return (
            <div style={{ float: 'left', border: "1px solid green", width: 200, height: 800 }}>
                <div className="container">
                    {renderMainCharInfo}
                </div>
            </div>
        )
    }
}


export default AllyInterface;