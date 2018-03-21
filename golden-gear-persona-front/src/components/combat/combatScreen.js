import React from 'react';

class CombatScreen extends React.Component{
    handleClick(){
        alert('xD')
    }
    render(){
        return(
            <div style={{border: '1px solid blue', height: 600, width: 600}}> 
                <button onClick={() => this.handleClick()}> Attack </button>
            </div>
        )
    }
}

export default CombatScreen;