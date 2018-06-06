import React from 'react';
import { connect } from 'react-redux';

import { setDialogueState } from '../../actions/modals';
import thrill from './thrill.mp3'

import king from '../assets/king.png'

import './styles.css';

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

            <div id='dialogue' className="d-flex flex-column align-items-center" style={{ width: '600px', height: '150px' }}>
                {/* <audio ref="thrill" src={thrill} type="audio/mpeg"></audio> */}
                {/* <img src={`${port}`} style={{ height: "150px" }} /> */}
                <div className="d-flex flex-column align-items-center" style={{ width: '430px', justifyContent: 'center', textAlign: 'center' }}>
                    <h5> {array[this.state.i].name} </h5>
                    <div> {array[this.state.i].text} </div>

                </div>
                <div onClick={() => increment()} style={{ paddingTop: 20 }}> NEXT </div>
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
            marginLeft: 100
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