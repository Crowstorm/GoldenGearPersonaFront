import React from 'react';

export default ({input, label}) =>{  //this.props.input
    console.log(input)
    return(
        <div> 
            <label>{label}</label>
            <input {...input}/> 
        </div>
    )
}