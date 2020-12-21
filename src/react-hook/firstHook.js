import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import MySecondHook from "./secondHook";
import BlackAndWhiteBlub from '../images/image-asset.jpeg';
export default function MyFirstHook() {
    let history=useHistory();

    const [counter,setCounter]=useState(0);
    const [isLightOn,setIsLIghtOn]=useState(false);
    const [imageUrl,setImageUrl]=useState('https://media.istockphoto.com/photos/light-bulb-on-a-white-background-picture-id907928762');

    function handleLight() {
        if(isLightOn){
            setImageUrl('https://media.istockphoto.com/photos/light-bulb-on-a-white-background-picture-id907928762');
        }else{
            setImageUrl('https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg')
        }
        setIsLIghtOn(!isLightOn);
    }


    return (
        <div>
        <div>Counter value {counter}</div>
            <button onClick={()=>setCounter(counter+1)}>Increase</button>
            <img style={{width:'30%'}}
                 onClick={()=>handleLight()}
                src={imageUrl}/>
            <button onClick={()=>history.push('/third/t/edit',{name:"Ashish"})}>Change route</button>
            <MySecondHook imageUrl={imageUrl} name="This is Ashish" localImage={BlackAndWhiteBlub}/>
        </div>

    )

}
