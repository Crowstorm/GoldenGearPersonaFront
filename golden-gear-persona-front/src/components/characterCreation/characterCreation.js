import React from 'react';
import { reduxForm} from 'redux-form';

import CharacterCreationForm from './characterCreationForm';
import CharacterCreationReview from './CharacterCreationReview'



class CharacterCreation extends React.Component {
    state = { showReview: false }

    renderContent() {
        if (this.state.showReview === false) {
            return <CharacterCreationForm
                onFormSubmit={() => this.setState({ showReview: true })}
            />
        } else {
            return <CharacterCreationReview onCancel={() => this.setState({showReview: false})}/>
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'characterCreationForm'
})(CharacterCreation);