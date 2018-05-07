import React from 'react';

class Dialogue extends React.Component{
    

    dialogueReceiver = (array) =>{
        return(
            <div>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678110-sign-info-128.png" />
                <p> {array.text} </p>
                <p onClick={ () => alert('elo')}> NEXT </p>
            </div>
        )
    }
    render(){
        const array = {text: 'jestem testowym dialogiem'};
        
        return(
            <div className=" d-flex align-items-center justify-content-center" style={{ marginTop: 450, position: 'relative' }}> Jeste dialog
                {this.dialogueReceiver(array)}
             </div>
        )
    }
}

export default Dialogue;