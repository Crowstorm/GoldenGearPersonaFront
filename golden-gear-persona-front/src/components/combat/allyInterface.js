import React from 'react'


class AllyInterface extends React.Component {
    componentDidMount() {
        this.props.fetchCharacter();
    }

    handleOpenCharCard = () =>{
        this.props.setCharCardState(true)
    }

    getMainCharInfo = () => {
        const {name, portrait, stats } = this.props.mainChar[0];
        const {hp, mp} = stats;
        return (
            <div className="d-flex flex-column" onClick={()=>this.handleOpenCharCard()}>
                <p className="d-flex justify-content-center" style={{marginTop: 15}}>{name}</p>
                <img src={portrait} style={{height: 100, border: '3px solid green'}}/>
                <p className="d-flex justify-content-center" style={{marginTop: 15}}> Hp: {hp} Mp: {mp} </p>
            </div>
        )
    }






    render() {
        let renderMainCharInfo = this.props.mainChar ? this.getMainCharInfo() : 'lol'
        return (
            <div style={{ float: 'left', border: "1px solid green", width: 200, height: 800 }}>
                <div className="container d-flex justify-content-center">
                    {renderMainCharInfo}
                </div>
            </div>
        )
    }
}


export default AllyInterface;