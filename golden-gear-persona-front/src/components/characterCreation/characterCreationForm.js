import React from 'react';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'

import { textInputs as characterCreationFormField, portraitPicker } from './characterCreationFormField';
import {renderTextField} from './characterCreationFormField';


const FIELDS = [
    { label: "Character Name", name: "name" },
    { label: "Character Title", name: "title" }
]

const PORTRAITS = [
    { img: "https://vignette.wikia.nocookie.net/megamitensei/images/3/3d/Ryuji_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202221544", id: "por1" },
    { img: "https://vignette.wikia.nocookie.net/megamitensei/images/6/6b/Haru_All_Out.png/revision/latest?cb=20170202222551", id: "por2" },
    { img: "https://vignette.wikia.nocookie.net/megamitensei/images/5/5a/Yusuke_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202222135", id: "por3" },
    { img: "http://i.imgur.com/cZayoNI.png", id: "por4" },
    { img: "https://vignette.wikia.nocookie.net/megamitensei/images/e/ec/Akechi_All_Out.png/revision/latest/scale-to-width-down/481?cb=20160917054538", id: "por5" },
    { img: "https://vignette.wikia.nocookie.net/megamitensei/images/2/25/Ann_All_Out.png/revision/latest/scale-to-width-down/480?cb=20170202221932", id: "por6" },
]

const CLASSES = [
    {classGame: 'warrior'},
    {classGame: 'thief'},
    {classGame: 'mage'},
]




class CharacterCreationForm extends React.Component {
    renderFields() {
        return _.map(FIELDS, field => {
            return <div key={field.name} className="form-group"><Field className="form-control" component={characterCreationFormField} type="text" label={field.label} name={field.name} /> </div>
        });
    }

    // renderFields() {
    //     return _.map(FIELDS, field => {
    //         return <Field key={field.name} component={characterCreationFormField} type="text" label={field.label} name={field.name} />
    //     });
    // }

    renderPortraits() {
        return _.map(PORTRAITS, port => {
            return <div className="custom-radio custom-control"><label key={port.id}> <Field className="custom-control-input" component="input" type="radio" name="portrait" value={port.img} /> <img style={{'paddingLeft': 10, height: 125}} src={port.img} /> </label>  </div>
        })
    }

    renderClasses(){
        return _.map(CLASSES, classGame => {
            return <label key={classGame.classGame}> <Field className="form-check-input"  component="input" type="radio" name="classGame" value={classGame.classGame} />  {classGame.classGame}</label> 
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
                    {this.renderFields()}
                    <div>
                        <label>Pick your character's portrait</label>
                        <div className="form-check">
                            {this.renderPortraits()}
                        </div>
                    </div>
               
                    <div>
                        <label>Pick your class</label>
                        <div>
                            <Field className="custom-select" name="classGame" component="select">
                                <option></option>
                                <option value="warrior">Warrior</option>
                                <option value="thief">Thief</option>
                                <option value="mage">Mage</option>
                            </Field>
                        </div>
                    </div>
                    <Link className="red btn-flat white-text" to='/'>Cancel </Link>
                    <button className="teal btn-flat right white-text" type="submit">Next</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.name) {
        errors.name = 'You must name your character';
    }
    if (!values.title) {
        errors.title = 'Title required';
    }
    if (!values.portrait) {
        errors.portrait = 'You must pick a portrait for your character';
    }
    if (!values.classGame) {
        errors.classGame = 'You must pick a class for your character';
    }

    console.log('err', errors)
    return errors;
}

export default reduxForm({
    validate,
    form: 'characterCreationForm',
    destroyOnUnmount: false
})(CharacterCreationForm);