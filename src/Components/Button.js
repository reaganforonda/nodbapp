import React from 'react';

function Button(props) {
    return(
        <button className={props.cssClass} onClick={props.onclick}>{props.title}</button>
    );
}

export default Button;