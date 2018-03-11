import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class CharacterCreationReview extends React.Component {
    render() {
        return (
            <div>
                <h5>Confirm </h5>
                <div>
                    <div>{this.props.formValues.name}</div>
                </div>
                <div>
                    <div>{this.props.formValues.title}</div>
                </div>
                <div>
                    <div><img src={this.props.formValues.portrait} /></div>
                </div>

                <button className="yellow darken-3 btn-flat" onClick={this.props.onCancel}>
                    Go back
                </button>

                <button onClick={() => this.props.createCharacter(this.props.formValues)} className="green btn-flat right"> Create Character </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formValues: state.form.characterCreationForm.values
    };
};

export default connect(mapStateToProps, actions)(CharacterCreationReview);