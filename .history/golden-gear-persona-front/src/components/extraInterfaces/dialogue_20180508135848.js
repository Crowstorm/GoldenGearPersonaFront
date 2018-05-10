import React from 'react';

class Dialogue extends React.Component{
    constructor(props) {
        super(props);
        this.state = {i: 0}
      }
    

    dialogueReceiver = (array) =>{
        
        const increment = () =>{
            this.setState({i: i+1});
            console.log(i, 'okiiiiiiiiiiii');
            console.log(array[i].text);
        }
        return(
            <div className="d-flex flex-row align-items-center" style={{width: '600px', height: '150px'}}>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678110-sign-info-128.png" style={{height: "150px"}}/>
                <div style={{width: '430px', border: '1px solid blue'}}> {array[i].text} </div>
                {/* dopoki jest length to next, nie ma to konczy dialog przekaz dlugosc tablicy do finckji onclick*/}
                <div onClick={ () => increment()}> NEXT </div>
            </div>
        )
    }
    render(){
        let i = 0;
        const array = [{text: 'jestem testowym dialogiem'}, {text: "drugi dialog"}]
        let dialogueStyle = {
            position: 'absolute',
            border: "1px solid green",
            backgroundColor: 'white'
        }
        
        return(
            <div className=" d-flex align-items-center justify-content-center" style={dialogueStyle}>
                {this.dialogueReceiver(array)}
             </div>
        )
    }
}

export default Dialogue;