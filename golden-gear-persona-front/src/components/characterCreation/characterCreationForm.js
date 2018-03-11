import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'

import { textInputs as characterCreationFormField, portraitPicker } from './characterCreationFormField';


const FIELDS = [
    { label: "Character Name", name: "name" },
    { label: "Character Title", name: "title" }
]

const PORTRAITS = [
    { img: "https://pm1.narvii.com/6484/d5484227c0f1f349eb66b6479107e379097e2d18_128.jpg", id: "por1" },
    { img: "https://orig00.deviantart.net/2497/f/2009/195/4/9/big_boss_avatar_by_near_8.png", id: "por2" }
]


class CharacterCreationForm extends React.Component {
    renderFields() {
        return _.map(FIELDS, field => {
            return <Field key={field.name} component={characterCreationFormField} type="text" label={field.label} name={field.name} />
        });
    }

    renderPortraits() {
        return _.map(PORTRAITS, port => {
            return <label> <Field key={port.id} component="input" type="radio" name="portrait" value={port.img} />  <img src={port.img} /></label>
        })
    }

    render() {
        console.log('props', this.props)
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
                    {this.renderFields()}
                    <div>
                        <label>Pick your character's portrait</label>
                        <div>
                            {this.renderPortraits()}
                        </div>
                    </div>

                    <Link className="red btn-flat white-text" to='/'>Cancel </Link>
                    <button className="teal btn-flat right white-text" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors ={};

    if(!values.name){
        errors.name = 'You must name your character';
    }
    if(!values.title){
        errors.title = 'Title required';
    }
    if(!values.portrait){
        errors.portrait = 'You must pick a portrait for your character';
    }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'characterCreationForm',
    destroyOnUnmount: false
})(CharacterCreationForm);