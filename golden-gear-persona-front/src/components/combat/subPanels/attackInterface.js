import React from 'react';

class AttackInterface extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: null
        };
    }
    
    handleAllyAttack = () => {
        let dmg = 5
        this.props.attackReady(true);
    }

    handleOpenMenus = (menu) => {
        this.setState({menu: menu.toString()})
        console.log(this.state.menu)
        return(
            <div> {menu.toString()} </div>
        )
    }
    handleRenderMenus = (menu) =>{
        let i = this.props.mechanics.attackingAllyIndex;
        console.log(i)
        console.log(menu)
        console.log(this.props.mainChar[i].$menu)
        return(
            <div> {this.props.mainChar[i].skills[0]} </div>
        )
    }

    render() {
        const buttonStyle = {
            width: '180px',
            height: '50px',
            border: "1px solid red",
            webkitAppearance: 'button',
        }
        let i = this.props.mechanics.attackingAllyIndex;

        let renderAdditionalMenus = (this.state.menu) ? this.handleRenderMenus(this.state.menu) : 'elo';
        console.log('propsy ataku', this.props)
        return (
            <div className=" d-flex align-items-center justify-content-center" style={{ marginTop: 450, position: 'relative' }}>
                <div className="d-flex flex-column" style={{ marginBottom: 0 }}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleAllyAttack()}> Basic Attack </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenMenus('skills')}> Skills </div>
                </div>
                <img src={this.props.mainChar[i].portrait} style={{ height: 50, zIndex: 5, position: 'absolute', borderRadius: 100, border: '1px solid black' }} />
                <div className="d-flex flex-column" style={{ marginBottom: 0 }}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenMenus('magic')}> Magic </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={() => this.handleOpenMenus('consumables')}> Consumables </div>
                </div>

                {renderAdditionalMenus}
            </div>
        )
    }
}

export default AttackInterface;