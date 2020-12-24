import React, {useEffect, useState} from 'react';
import getCurrentUser from "./loginManager";
import firebase from "firebase";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";

export default function Chat() {
    const [user,setUSer]=useState();
    const [gettingUser,setGettingUser]=useState(true);
    const [msg,setMsg]=useState();
    const [receivedMsg,setReceivedMsg]=useState([]);


    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            let user_obj={};
            user_obj.id=user.uid;
            user_obj.email=user.email;
            user_obj.photoURL=user.photoURL;
            user_obj.name=user.displayName;
            setUSer(user_obj);
            setGettingUser(false);
            console.log(user_obj);

        });
        getMsg();
    },[true]);

    const handleChange=(event)=>{
        setMsg(event.target.value);
    };

    const onWriteMsgToDb= async () => {
        console.log(user)
        try {
            await firebase.database().ref("chat").push({
                content: msg,
                timestamp: Date.now(),
                uid: user.id
            });
        } catch (error) {
            console.log(error);
        }
    };

    const getMsg=()=>{
        try {
            firebase.database().ref("chat").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                setReceivedMsg(chats);
            });
        } catch (error) {
            console.log(msg)
        }
    };

    const onSendMsg=()=>{
        onWriteMsgToDb().finally(function (res) {
            console.log(res);
        })
    };

    return (
        <div>
            {gettingUser?<CircularProgress/>:
                <div>
            <h1>Welcome {user.email}</h1>
                    <div>
                        <div>
                            {receivedMsg.length?
                            receivedMsg.map((item)=>
                            <p>{item.content}</p>
                            ):''
                            }
                        </div>
                        <Grid container  spacing={2}>
                                <Grid item xs="9" sm="9">
                                    <TextField
                                        id="msg"
                                        label="Enter Name"
                                        variant="outlined"
                                        color="secondary"
                                        value={msg}
                                        placeholder="Enter Message"
                                        helperText="Please Enter Message"
                                        error={false}
                                        disabled={false}
                                        onChange={handleChange}
                                        fullWidth={true}
                                    />
                                </Grid>
                            <Grid item xs="3" sm="3">
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    onClick={onSendMsg}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </div>

            }

        </div>
    )
}
