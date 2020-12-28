import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import firebase from 'firebase';
import {REGISTER_USER} from "./config";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {createChatRoom, getChatRoomList, getUserList} from "./user-managemant";
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import Alert from "@material-ui/lab/Alert/Alert";
export default function UserList(props) {
    const [userList,setUserList]=useState();
    const [chatRoomList,setChatRoomList]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [open,setOpen]=useState(false);
    const [error,setError]=useState(false);
    const [creatingRoom,setCreatingRoom]=useState(false);
    const [room_name,setRoomName]=useState();
    const [room_desc,setRoomDesc]=useState();
    const [room_image,setRoomImage]=useState();
    let history=useHistory();

    const handleClose = () => {
        setOpen(false);
        setError(false);
    };

    const handleChange=(event) =>{
        if(event.target.id==='room_name') setRoomName(event.target.value);
        else if(event.target.id==='room_desc') setRoomDesc(event.target.value);
        else setRoomImage(event.target.value);
    };

    const createRoom=()=>{
        setCreatingRoom(true);
        let room={};
        room.name=room_name;
        room.id=props.uid+'_'+new Date().getTime();
        room.room_desc=room_desc;
        room.room_image=room_image;
        console.log(room);
        createChatRoom(room).then(function (response) {
            console.log(response);
            setCreatingRoom(false);
            setOpen(false);
            //history.push('chat/'+room.id);
        }).catch(function (error) {
            setCreatingRoom(false);
            setError(true);
        });

    };

    useEffect(()=>{
        getChatRoomList().then(function (res) {
            setChatRoomList(res);
            setIsLoading(false);
        });
    },[true]);

    return <div style={{margin:'20px 0px'}}>
        {isLoading?<p>Please Wait , Loading users...</p>:
            <Card style={{padding: 20}}>
                <Button style={{float:'right'}} onClick={()=>setOpen(true)}>
                    Create Chat Room
                </Button>
            <h3>Available Chats</h3>
            <List>
                {chatRoomList.map((item) =>
                    <ListItem style={{cursor:'pointer'}}
                              onClick={()=>history.push('/chat/'+item.data().room_id,{room:item.data()})}>
                        <ListItemAvatar>
                            <Avatar src={item.data().room_image}>
                                CA
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.data().room_name} secondary={item.data().room_desc}/>
                    </ListItem>
                )}
            </List>
        </Card>}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            {creatingRoom?<CircularProgress/>:
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We will send updates
                    occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    onChange={handleChange}
                    margin="dense"
                    id="room_name"
                    label="Email Chat Room Name"
                    type="text"
                    value={room_name}
                    fullWidth
                />
                <TextField
                    autoFocus
                    onChange={handleChange}
                    margin="dense"
                    id="room_desc"
                    label="Email Chat Room Description"
                    type="text"
                    value={room_desc}
                    fullWidth
                />
                <TextField
                    autoFocus
                    onChange={handleChange}
                    margin="dense"
                    id="room_image"
                    value={room_image}
                    label="Email Chat Room Image"
                    type="text"
                    fullWidth
                />

            </DialogContent>}
            {creatingRoom?'':
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={createRoom} color="primary">
                    Create Room
                </Button>
            </DialogActions>}
        </Dialog>
        <Snackbar open={error} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                Cannot Create Room at this time
            </Alert>
        </Snackbar>
    </div>
}
