import React from 'react';

class AttackInterface extends React.Component{
    handleAllyAttack = () => {
        let dmg = 5
        this.props.attackReady(true);
    }
    
    render(){
        const buttonStyle = {
            width: '200px',
            height: '50px',
            border: "1px solid red"
        } 
        return(
            <div className="container" style={{marginTop: 100}}>
                <div className="row">
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Basic Attack </div>
                    <div style={buttonStyle}> Skills </div>
                </div>
                <div className="row">
                    <div style={buttonStyle}> Magic </div>
                    <div style={buttonStyle}> Consumables </div>
                </div>
            </div>
        )
    }
}

export default AttackInterface;