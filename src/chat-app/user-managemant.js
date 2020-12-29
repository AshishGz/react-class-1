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
export async function getChatRoomList() {
    const snapshot = await firebase.firestore()
        .collection(CHAT_ROOM).get();
    return snapshot.docs.map(doc => doc);
}

export  function createChatRoom(chat_room) {
   return new Promise(async function (resolve, reject) {
       await firebase.firestore().collection(CHAT_ROOM).add({
           room_name: chat_room.name,
           room_id: chat_room.id,
           room_image: chat_room.room_image,
           room_desc: chat_room.room_desc,
           room_theme:chat_room.room_theme
       }).then(function (response) {
            resolve(response);
       }).catch(function (error) {
          reject(error);

       });
   })


}

export  function updateChatRoom(chat_room,id) {
    return new Promise(async function (resolve, reject) {
        await firebase.firestore().collection(CHAT_ROOM).doc('/'+id).update({
            room_name: chat_room.name,
            room_id: chat_room.id,
            room_image: chat_room.room_image,
            room_desc: chat_room.room_desc,
            room_theme:chat_room.room_theme
        }).then(function (response) {
            resolve(response);
        }).catch(function (error) {
            reject(error);

        });
    })


}
