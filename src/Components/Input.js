import React from 'react';

function Input(props){
    return (
        <input value={props.value} className={props.cssClass} placeholder={props.placeholder} onChange={props.onchange}/>
    );
}

export default Input;