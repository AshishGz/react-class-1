import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card/Card";
import CoustomDialog from "./coustomDialog";

export default function TimerApp() {

    const [time,setTime]=useState();
    const [timer,setTimer]=useState();
    const  [isAlert,setIsAletr]=useState(false);
    const  [openDialouge,setOpenDialouge]=useState(false);
    let  [secondCount,setSecondCount]=useState(0);


    function handleChange(event) {
        setTime(event.target.value);
    }

    function runTimer() {
       setTimer(setInterval(function () {
            if(secondCount==time){
                setIsAletr(!isAlert);
                setSecondCount(0);
                setTime(0);
                setOpenDialouge(true)

            }else{
                setSecondCount(secondCount++);
            }
        },1000));

    }
    useEffect(()=>{
        clearInterval(timer);
    },[isAlert]);

    function onCloseDialouige() {
        setOpenDialouge(false);
    }

    return (
        <div style={{maxWidth:600,margin:'auto'}}>
            <h1>This is timer APP</h1>
            <Grid container  spacing={2}>
                    <Grid  item xs="9" sm="9">
                        <TextField
                            id="time"
                            onChange={handleChange}
                            value={time}
                            label="Please Select Your Time"
                            helperText="Set timer in the basis of Second"
                            fullWidth={true}
                            type="number"
                            variant="filled" />
                    </Grid>
                <Grid item xs="3" sm="3">
                    <Button onClick={runTimer}> Start Timer </Button>
                </Grid>

            </Grid>
            <div>
                <Card>
                    <h1 style={{textAlign:'center'}}>{secondCount}</h1>
                </Card>
            </div>
            <CoustomDialog openDialouge={openDialouge} onCloseDialouige={onCloseDialouige}
                           dialougeContent={<div>
                               Alert Alert! Its time Now
                           </div>}
            />
        </div>
    )

}
