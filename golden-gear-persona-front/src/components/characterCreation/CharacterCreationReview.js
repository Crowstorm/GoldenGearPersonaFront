import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class CharacterCreationReview extends React.Component {

    handleCreateCharacter(values, user) {
       // console.log('val', values);
       // console.log('user', user);
        const payload = {
            id: user.googleId,
            name: values.name,
            title: values.title,
            classGame: values.classGame,
            portrait: 1
        }
        this.props.createCharacter(payload);
    }

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
                <div>
                    <div>{this.props.formValues.classGame}</div>
                </div>

                <button className="yellow darken-3 btn-flat" onClick={this.props.onCancel}>
                    Go back
                </button>

                <button onClick={() => this.handleCreateCharacter(this.props.formValues, this.props.user)} className="green btn-flat right"> Create Character </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        formValues: state.form.characterCreationForm.values,
        user: state.auth
    };
};

export default connect(mapStateToProps, actions)(CharacterCreationReview);