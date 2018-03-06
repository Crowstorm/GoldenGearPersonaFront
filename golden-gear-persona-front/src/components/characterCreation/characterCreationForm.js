import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import {Link} from 'react-router-dom'

import characterCreationFormField from './characterCreationFormField';

const FIELDS = [
    { label: "Character Name", name: "name" },
    { label: "Character Title", name: "title" }
]


class CharacterCreationForm extends React.Component {
    renderFields() {
        return _.map(FIELDS, field => {
            return <Field key={field.name} component={characterCreationFormField} type="text" label={field.label} name={field.name}/>
        });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link className="red btn-flat white-text" to='/'>Cancel </Link>
                    <button className="teal btn-flat right white-text" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'characterCreationForm',
    // fields: ['name', 'portrait', 'class']
})(CharacterCreationForm);