import React from 'react';
import { connect } from 'react-redux';

import { setInfoState } from '../../actions/modals';


class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 }
    }

    handleCloseModal() {
        this.props.setInfoState(false)
    }
  
    render() {
        console.log('jestem na ekranie');
        let i = 0;
        let dialogueStyle = {
            background: '#fff',
            position: 'absolute',
            borderRadius: '10px',
            padding: '40px',
            margin: '20px',
            /* width: 100%;
            height: 100%; */
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '1111',
        }
       // let dialogueRenderer = (this.props.modals.dialogueVisibility) ? this.dialogueReceiver(this.array) : '';
        return (
            <div className=" d-flex align-items-center justify-content-center" style={dialogueStyle}>
                <div> {this.props.modals.infoText} </div>
                <button onClick={() =>this.props.setInfoState(false)}> close </button>

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
        setInfoState: (visibility) => {
            dispatch(setInfoState(visibility));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);