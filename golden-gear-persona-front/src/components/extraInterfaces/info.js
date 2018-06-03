import React from 'react';
import { connect } from 'react-redux';

import { setInfoState } from '../../actions/modals';


class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = { i: 0 }
    }

  
    render() {
        console.log('jestem na ekranie');
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
                <div> {this.props.modals.infoText} </div>
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