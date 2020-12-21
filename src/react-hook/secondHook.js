import React from 'react';


export default function MySecondHook(props) {




    return (
        <div>THis is second Component
        <img style={{width:60}} src={props.imageUrl}/><br/>
            <div>{props.name}</div>
            <img   src={props.localImage}/>
        </div>
    )
}
