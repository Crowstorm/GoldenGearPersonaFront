import React from 'react';
import { connect } from 'react-redux';

import { setDialogueState } from '../../actions/modals';
import thrill from './thrill.mp3'

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
            
            this.playSound('thrill');
            if (this.state.i === array.length - 1) {
                this.props.setDialogueState(false);
                this.setState({ i: 0 });
            } else {
                this.setState({ i: this.state.i + 1 });
            }
        }

        return (
            
            <div className="d-flex flex-row align-items-center" style={{ width: '600px', height: '150px' }}>
            <audio ref="thrill" src={thrill} type="audio/mpeg"></audio>
                <img src="https://vignette.wikia.nocookie.net/megamitensei/images/6/6b/Haru_All_Out.png/revision/latest?cb=20170202222551" style={{ height: "150px" }} />
                <div style={{ width: '430px', border: '1px solid blue' }}> {array[this.state.i].text} </div>
                {/* dopoki jest length to next, nie ma to konczy dialog przekaz dlugosc tablicy do finckji onclick*/}
                <div onClick={() => increment()}> NEXT </div>
            </div>
        )
    }
    render() {
        let i = 0;
        const array = [{ text: "Cutting down the enemy as they approach..." }, { text: "Ah, what a thrill!" }]
        let dialogueStyle = {
            position: 'absolute',
            border: "1px solid green",
            backgroundColor: 'white'
        }
        let dialogueRenderer = (this.props.modals.dialogueVisibility) ? this.dialogueReceiver(array) : '';
        return (
            <div className=" d-flex align-items-center justify-content-center" style={dialogueStyle}>
                {this.dialogueReceiver(array)}
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