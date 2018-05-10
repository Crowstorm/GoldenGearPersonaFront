import React from 'react';
import { connect } from 'react-redux';

import { setDialogueState } from '../../actions/modals';
import thrill from './thrill.mp3'

import king from '../assets/king.png'

class Dialogue extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 }
    }

    playSound(soundName) {
        this.refs[soundName].play();
    }

    dialogueReceiver = (array) => {

        const increment = () => {
            
            //this.playSound('thrill');
            if (this.state.i === array.length - 1) {
                this.props.setDialogueState(false);
                this.setState({ i: 0 });
            } else {
                this.setState({ i: this.state.i + 1 });
            }
        }

        return (
            
            <div className="d-flex flex-row align-items-center" style={{ width: '600px', height: '150px' }}>
            {/* <audio ref="thrill" src={thrill} type="audio/mpeg"></audio> */}
                <img src={king} style={{ height: "150px" }} />
                <div className="d-flex align-items-center"  style={{ width: '430px', justifyContent: 'center', textAlign: 'center' }}> {array[this.state.i].text} </div>
                {/* dopoki jest length to next, nie ma to konczy dialog przekaz dlugosc tablicy do finckji onclick*/}
                <div onClick={() => increment()}> NEXT </div>
            </div>
        )
    }
    render() {
        console.log(this.props.dialogue);
        let i = 0;
        let dialogueStyle = {
            position: 'absolute',
            border: "1px solid green",
            backgroundColor: 'white',
            marginTop: 450,
        }
       // let dialogueRenderer = (this.props.modals.dialogueVisibility) ? this.dialogueReceiver(this.array) : '';
        return (
            <div className=" d-flex align-items-center justify-content-center" style={dialogueStyle}>
                {this.dialogueReceiver(this.props.dialogue)}
            </div>
        )
    }
}
function mapStateToProps(store) {
    return {
        modals: store.modals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDialogueState: (visibility) => {
            dispatch(setDialogueState(visibility));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogue);