import React, {useEffect, useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import {useHistory} from "react-router-dom";
import firebase from "firebase";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import UserList from "./user-list";
export default function ChatAppHome() {

    const [user,setUser]=useState();
    const [gettingUser,setGettingUser]=useState(true);
    const [isLogin,setIsLogin]=useState(false);
    let history=useHistory();

    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                let user_obj = {};
                user_obj.id = user.uid;
                user_obj.email = user.email;
                user_obj.photoURL = user.photoURL;
                user_obj.name = user.displayName;
                setUser(user_obj);
                setIsLogin(true);
                console.log(user_obj);
            }
            setGettingUser(false);

        });
    },[true]);

    return (
        <div>
            {gettingUser ? <p>Please Waitt ...</p> :
                <div style={{margin: 20}}>

                    <Card style={{padding: 20}}>
                        <img
                            style={{margin: 'auto', display: 'block'}}
                            src="https://t4.ftcdn.net/jpg/02/33/37/49/360_F_233374975_zdM8yWzcZRFBauoyU4DgUgYCjkjx5jlv.jpg"/>
                        <h1>Welcome to Connect App.</h1>
                        <p>
                            Connect with your friends anywhere any time.
                        </p>
                        {isLogin ?
                            <p>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" src={user.photoURL}>
                                            R
                                        </Avatar>
                                    }
                                    title={user.name}
                                    subheader={user.email}
                                />
                            </p> :
                            <div>
                                <Button color="secondary" onClick={() => history.push('login')}>
                                    Register
                                </Button>
                                <Button style={{marginLeft: 20}} color="primary" onClick={() => history.push('login')}>
                                    Login
                                </Button>
                            </div>
                        }

                    </Card>
                    {isLogin?
                    <UserList uid={user.id}/>:''}


                </div>
            }
        </div>
    )

}
