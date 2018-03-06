import React from 'react';

export function textInputs({input, label}) {  //this.props.input
    return(
        <div> 
            <label>{label}</label>
            <input {...input}/> 
        </div>
    )
}

export function portraitPicker(props){
    return(
        <div> 
            
            <input type="radio" name={props.id} id={props.id} />
            <label for={props.id}> <img src={props.img} /></label>
            
        </div>
    )
}