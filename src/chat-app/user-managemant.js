import firebase from 'firebase';
import {CHAT_ROOM, REGISTER_USER} from "./config";
export async function registerUser(userInfo) {
    await firebase.firestore().collection(REGISTER_USER).add({
        name: userInfo.displayName,
        email: userInfo.email,
        image: userInfo.photoURL,
        fid: userInfo.uid,
    }).then(function (response) {



    }).catch(function (error) {

    })

}

export async function getUserList() {
    const snapshot = await firebase.firestore()
        .collection(REGISTER_USER).get();
    return snapshot.docs.map(doc => doc);
}

export async function createChatRoom(chat_room) {
    await firebase.firestore().collection(CHAT_ROOM).add({
        room_name:chat_room.name,
        room_id:chat_room.id,
    }).then(function (response) {



    }).catch(function (error) {

    })

}
