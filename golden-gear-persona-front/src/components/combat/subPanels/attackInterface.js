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
            <div className="container" style={{marginTop: 450}}>
                <div className="row" style={{marginBottom: 0}}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle} onClick={()=> this.handleAllyAttack()}> Basic Attack </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Skills </div>
                </div>
                <div className="row" style={{marginBottom: 0}}>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Magic </div>
                    <div className="d-flex justify-content-center flex-wrap align-items-center" style={buttonStyle}> Consumables </div>
                </div>
            </div>
        )
    }
}

export default AttackInterface;