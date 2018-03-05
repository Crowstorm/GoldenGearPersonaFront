import React from 'react';
import {reduxForm} from 'redux-form';


class CharacterCreationForm extends React.Component{
    render(){
        return(
            <div> forma </div>
        )
    }
}

export default reduxForm({
    form: 'characterCreationForm',
    fields: ['name', 'portrait', 'class']
})(CharacterCreationForm);