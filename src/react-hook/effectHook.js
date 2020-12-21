import React, {useEffect, useState} from 'react';

export default function EffectHookExample() {

    const [count,setCount]=useState(0);
    const [isCalled,setIscalled]=useState(false);
    const [isCalledAgain,setIsCalledAgain]=useState(false);

    useEffect(()=>{
        console.log('This is use effect hook')
    },[isCalled,isCalledAgain]);

    return(
        <div>This is example of effect hook. {count}
        <button onClick={()=>setCount(count+1)}>Click</button>
        <button onClick={()=>setIscalled(true)}>Call Effect</button>
        <button onClick={()=>setIsCalledAgain(true)}>Call Effect Again</button>
        </div>
    )

}
