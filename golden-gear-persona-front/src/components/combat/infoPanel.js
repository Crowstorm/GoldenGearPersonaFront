import React from 'react';

class InfoPanel extends React.Component{
    render(){
        return(
            <div className="align-self-end"style={{border: '1px solid blue', height: 200, width: 600, position: 'absolute', marginLeft: 200}}> 
                Info
            </div>
        )
    }
}

export default InfoPanel;