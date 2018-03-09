import React from 'react';

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