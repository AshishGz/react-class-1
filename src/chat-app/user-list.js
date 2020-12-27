import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import firebase from 'firebase';
import {REGISTER_USER} from "./config";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {createChatRoom, getUserList} from "./user-managemant";
import {useHistory} from 'react-router-dom';
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import TextField from "@material-ui/core/TextField/TextField";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
export default function UserList(props) {
    const [userList,setUserList]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [open,setOpen]=useState(false);
    const [room_name,setRoomName]=useState();
    let history=useHistory();

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange=(event) =>{
        setRoomName(event.target.value);
    };

    const createRoom=()=>{
        let room={};
        room.name=room_name;
        room.id=props.uid+'_'+new Date().getTime();
        console.log(room);
        // createChatRoom().then(function () {
        //    alert('room created')
        // });

    };

    useEffect(()=>{
        getUserList().then(function (res) {
            setUserList(res);
            setIsLoading(false);
        });
    },[true]);

    return <div style={{margin:'20px 0px'}}>
        {isLoading?<p>Please Wait , Loading users...</p>:
            <Card style={{padding: 20}}>
                <Button style={{float:'right'}} onClick={()=>setOpen(true)}>
                    Create Chat Room
                </Button>
            <h3>Available users</h3>
            <List>
                {userList.map((item) =>
                    <ListItem style={{cursor:'pointer'}}
                              onClick={()=>history.push('/chat/'+item.data().fid)}>
                        <ListItemAvatar>
                            <Avatar src={item.data().image}>
                                CA
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.data().name} secondary={item.data().email}/>
                    </ListItem>
                )}
            </List>
        </Card>}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
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
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={createRoom} color="primary">
                    Subscribe
                </Button>
            </DialogActions>
        </Dialog>
    </div>
}
