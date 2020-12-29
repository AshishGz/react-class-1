import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import firebase from 'firebase';
import {REGISTER_USER} from "./config";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";

import List from "@material-ui/core/List/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import {createChatRoom, getChatRoomList, getUserList, updateChatRoom} from "./user-managemant";
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
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import ThemeIcon from '@material-ui/icons/FiberManualRecord';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton/IconButton";
export default function UserList(props) {
    const [userList,setUserList]=useState();
    const [chatRoomList,setChatRoomList]=useState();
    const [room_theme,setRoom_theme]=useState('#ffffff');
    const [isLoading,setIsLoading]=useState(true);
    const [open,setOpen]=useState(false);
    const [error,setError]=useState(false);
    const [creatingRoom,setCreatingRoom]=useState(false);
    const [room_name,setRoomName]=useState();
    const [room_desc,setRoomDesc]=useState();
    const [room_image,setRoomImage]=useState();
    const [update_room,setUpdateRoom]=useState();
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
        if(update_room){
            let room={};
            room.name=room_name;
            room.id=update_room.data().room_id;
            room.room_desc=room_desc;
            room.room_image=room_image;
            room.room_theme=room_theme;
            updateChatRoom(room,update_room.id).then(function (response) {
                console.log(response);
                setCreatingRoom(false);
                setOpen(false);
                history.push('chat/' + room.id,{room:room});
            }).catch(function (error) {
                setCreatingRoom(false);
                setError(true);
            });
        }else {
            let room={};
            room.name=room_name;
            room.id=props.uid+'_'+new Date().getTime();
            room.room_desc=room_desc;
            room.room_image=room_image;
            room.room_theme=room_theme;
            createChatRoom(room).then(function (response) {
                console.log(response);
                setCreatingRoom(false);
                setOpen(false);
                history.push('chat/' + room.id);
            }).catch(function (error) {
                setCreatingRoom(false);
                setError(true);
            });
        }

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
                              >
                        <ListItemAvatar onClick={()=>history.push('/chat/'+item.data().room_id,{room:item.data()})}>
                            <Avatar src={item.data().room_image}>
                                CA
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemSecondaryAction>
                            <ThemeIcon style={{height:60,width:60,borderRadius:'50%',color:item.data().room_theme?item.data().room_theme:'#ffffff'}}
                            ></ThemeIcon>
                            <IconButton edge="end" aria-label="delete">
                                <EditIcon onClick={(event)=>{
                                    setUpdateRoom(item);
                                    setRoomImage(item.data().room_image);
                                    setRoomDesc(item.data().room_desc);
                                    setRoom_theme(item.data().room_theme);
                                    setRoomName(item.data().room_name);
                                    setOpen(true);

                                }}/>
                            </IconButton>
                        </ListItemSecondaryAction>
                        <ListItemText primary={item.data().room_name} secondary={item.data().room_desc} onClick={()=>history.push('/chat/'+item.data().room_id,{room:item.data()})}/>
                    </ListItem>
                )}
            </List>
        </Card>}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title" style={{background:room_theme?room_theme:'#ffffff'}}>Subscribe</DialogTitle>
            {creatingRoom?<CircularProgress/>:
            <DialogContent style={{background:room_theme?room_theme:'#ffffff'}}>
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
                <div style={{display:'flex',marginTop:20}}>
                    {['#ffffff','#ef9a9a','#f48fb1','#ce93d8','#a1887f','#80cbc4','#c5e1a5','#ffab91'].map((item)=>
                        <div style={{height:60,width:60,borderRadius:'50%',background:item,marginRight:10,cursor:'pointer',border:item==room_theme?'1px solid #ffffff':'none'}}
                        onClick={()=>setRoom_theme(item)}
                        ></div>
                    )}
                </div>

            </DialogContent>}
            {creatingRoom?'':
            <DialogActions style={{background:room_theme?room_theme:'#ffffff'}}>
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
