import React from 'react';
import {useHistory,useParams} from 'react-router-dom';

export default function MyThirdHook() {
    let history=useHistory();
    let params=useParams();
    console.log(history);
    console.log(params);

    return(
        <div>Third Hook<br/>Prams: {params.id}<br/>
            {/*{history.location.state.name}*/}
        </div>
    )
}
