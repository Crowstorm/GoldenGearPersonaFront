import React from 'react';
import { connect } from 'react-redux';

import {setDialogueState} from '../../actions/modals';

class Dialogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 }
    }


    dialogueReceiver = (array) => {

        const increment = () => {
            if (this.state.i === array.length - 1) {
                alert('koniec');
                setDialogueState(false);
                this.setState({ i: 0 });
            } else {
                this.setState({ i: this.state.i + 1 });
            }
        }

        return (
            <div className="d-flex flex-row align-items-center" style={{ width: '600px', height: '150px' }}>
                <img src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678110-sign-info-128.png" style={{ height: "150px" }} />
                <div style={{ width: '430px', border: '1px solid blue' }}> {array[this.state.i].text} </div>
                {/* dopoki jest length to next, nie ma to konczy dialog przekaz dlugosc tablicy do finckji onclick*/}
                <div onClick={() => increment()}> NEXT </div>
            </div>
        )
    }
    render() {
        let i = 0;
        const array = [{ text: 'jestem testowym dialogiem' }, { text: "drugi dialog" }]
        let dialogueStyle = {
            position: 'absolute',
            border: "1px solid green",
            backgroundColor: 'white'
        }
        let dialogueRenderer = (this.store.modals.dialogueVisibility) ? this.dialogueReceiver(array) : '';
        return (
            <div className=" d-flex align-items-center justify-content-center" style={dialogueStyle}>
                {this.dialogueReceiver(array)}
            </div>
        )
    }
}
function mapStateToProps(store){
    return{
        modals: store.modals
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDialogueState: (visibility)=>{
        dispatch(setDialogueState(visibility));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogue);