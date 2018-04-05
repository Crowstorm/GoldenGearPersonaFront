import React from 'react';

class AttackInterface extends React.Component{
    handleAllyAttack = () => {
        let dmg = 5
        this.props.attackReady(true);
    }
    
    render(){
        const buttonStyle = {
            width: '180px',
            height: '50px',
            border: "1px solid red",
            webkitAppearance:'button',
        } 
        let i = this.props.mechanics.attackingAllyIndex;
        return(
            <div className=" d-flex align-items-center justify-content-center" style={{marginTop: 450, position: 'relative'}}>
                <div className="d-flex flex-column" style={{marginBottom: 0}}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={()=> this.handleAllyAttack()}> Basic Attack </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Skills </div>
                </div>
                <img src={this.props.mainChar[i].portrait} style={{height: 50, zIndex: 5, position: 'absolute', borderRadius: 100, border: '1px solid black'}}/>
                <div className="d-flex flex-column" style={{marginBottom: 0}}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Magic </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Consumables </div>
                </div>
            </div>
        )
    }
}

export default AttackInterface;