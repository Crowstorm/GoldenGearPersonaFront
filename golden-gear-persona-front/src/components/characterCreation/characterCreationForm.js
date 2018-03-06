import React from 'react';
import { reduxForm, Field } from 'redux-form';

import characterCreationFormField from './characterCreationFormField';


class CharacterCreationForm extends React.Component {
    renderFields() {
        return (
            <div>
                <Field label="Character Name" type="text" name="Character Name" component={characterCreationFormField} />
                <Field label="Character Title" type="text" name="Character Title" component={characterCreationFormField} />
            </div>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}

                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'characterCreationForm',
    // fields: ['name', 'portrait', 'class']
})(CharacterCreationForm);