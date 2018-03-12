import React from 'react';

import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

export const renderTextField = props => (
    <TextField hintText={props.label}
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
    />
  )

  export const renderSelectField = props => (
    <SelectField
      floatingLabelText={props.label}
      errorText={props.touched && props.error}
      {...props}
      onChange={(event, index, value) => props.onChange(value)}>
    </SelectField>
  )

export function textInputs({ input, label, meta: { error, touched } }) {  //this.props.input
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{marginBottom: '5px'}} />
            <div className='red-text' style={{marginBottom: '20px' }} >
                {touched && error}
            </div>

        </div>
    )
}

//radio button kloci sie z materialize
export function portraitPicker(props) {
    return (
        <div>

            <input type="radio" name={props.id} id={props.id} />
            <label for={props.id}> <img src={props.img} /></label>

        </div>
    )
}