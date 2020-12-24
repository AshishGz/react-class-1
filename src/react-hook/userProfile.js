import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card/Card";
import Button from "@material-ui/core/Button/Button";
import firebase from 'firebase';
import {useHistory,useParams} from 'react-router-dom';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
 export default function UserProfile() {
     let history=useHistory();
     let params=useParams();
     const [userProfile,setUserProfile]=useState({name:"",address:"",email:"",bio:"",phone:"",occupatiton:""});
     const [isSaving,setIsSaving]=useState(false);

     useEffect(()=>{
         if(params.id!='add'){
             getDatabyId();
         }
     },[true])

     function handelChange(event) {
         userProfile[event.target.id]=event.target.value;
         setUserProfile({...userProfile,userProfile});
     }


     const getDatabyId=()=>{
         const firestore = firebase.firestore();

         var docRef = firestore.collection("user-feedback").doc("/"+params.id);

         docRef.get().then(function(doc) {
             if (doc.exists) {
                 userProfile.name=doc.data().name;
                 userProfile.address=doc.data().address;
                 userProfile.email=doc.data().email;
                 userProfile.phone=doc.data().phone;
                 userProfile.occupatiton=doc.data().occupatiton;
                 userProfile.bio=doc.data().bio;
                 setUserProfile({...userProfile,userProfile});
                 console.log("Document data:", doc.data());
             } else {
                 // doc.data() will be undefined in this case
                 console.log("No such document!");
             }
         }).catch(function(error) {
             console.log("Error getting document:", error);
         });

     };
     const handleSaveData=()=>{
         setIsSaving(true);
         const firestore = firebase.firestore();
         if(params.id==='add') {
             firestore.collection("user-feedback").add({
                 name: userProfile.name,
                 address: userProfile.address,
                 email: userProfile.email,
                 bio: userProfile.bio,
                 phone: userProfile.phone,
                 occupatiton: userProfile.occupatiton
             }).then(function (response) {
                 setIsSaving(false);
                 history.push('/user-list');


             }).catch(function (error) {
                 setIsSaving(false);
             })
         }else{
             firestore.collection("user-feedback").doc(params.id).update({
                 name: userProfile.name,
                 address: userProfile.address,
                 email: userProfile.email,
                 bio: userProfile.bio,
                 phone: userProfile.phone,
                 occupatiton: userProfile.occupatiton
             }).then(function (response) {
                 setIsSaving(false);
                 history.push('/user-list');


             }).catch(function (error) {
                 setIsSaving(false);
             })
         }

     };

     return (
         <div style={{margin:30}}>

             <Grid container  spacing={2}>
                     <Grid item xs="6" sm="4"  style={{marginTop:20}}>
                         <TextField
                             id="name"
                             label="Enter Name"
                             variant="outlined"
                             color="secondary"
                             value={userProfile.name}
                             placeholder="Enter Name"
                             helperText="Please Enter Valid Name"
                             error={false}
                             disabled={isSaving}
                             onChange={handelChange}
                             fullWidth={true}
                         />
                     </Grid>
                 <Grid item xs="6" sm="4"  style={{marginTop:20}}>
                         <TextField
                             id="address"
                             label="Enter Address"
                             variant="outlined"
                             color="secondary"
                             value={userProfile.address}
                             placeholder="Enter Address"
                             helperText="Please Enter Valid Address"
                             error={false}
                             disabled={isSaving}
                             onChange={handelChange}
                             fullWidth={true}
                         />
                     </Grid>
                 <Grid item xs="6" sm="4"  style={{marginTop:20}}>
                     <TextField
                         id="email"
                         label="Enter Email"
                         variant="outlined"
                         color="secondary"
                         value={userProfile.email}
                         placeholder="Enter Email"
                         helperText="Please Enter Valid Email"
                         error={false}
                         disabled={isSaving}
                         onChange={handelChange}
                         fullWidth={true}
                     />
                 </Grid>
             </Grid>
             <Grid container  spacing={2}>
                 <Grid item xs="6" sm="4" style={{marginTop:20}}>
                     <TextField
                         id="phone"
                         label="Enter Phone"
                         variant="outlined"
                         color="secondary"
                         value={userProfile.phone}
                         placeholder="Enter Phone"
                         helperText="Please Enter Valid Phone Number"
                         error={false}
                         rowsMax={5}
                         multiline={true}
                         disabled={isSaving}
                         onChange={handelChange}
                         fullWidth={true}
                     />
                 </Grid>
                 <Grid item xs="6" sm="4"  style={{marginTop:20}}>
                     <TextField
                         id="occupatiton"
                         label="Enter occupatiton"
                         variant="outlined"
                         color="secondary"
                         value={userProfile.occupatiton}
                         placeholder="Enter Email"
                         helperText="Please Enter  occupatiton"
                         error={false}
                         disabled={isSaving}
                         onChange={handelChange}
                         fullWidth={true}
                     />
                 </Grid>
             </Grid>
             <div  style={{marginTop:20}}>
                 <TextField
                     id="bio"
                     label="Enter Bio"
                     variant="outlined"
                     color="secondary"
                     value={userProfile.bio}
                     placeholder="Enter Address"
                     helperText="Please Enter Valid Address"
                     error={false}
                     rowsMax={5}
                     rows={3}
                     multiline={true}
                     disabled={isSaving}
                     onChange={handelChange}
                     fullWidth={true}
                 />
             </div>
             <div  style={{marginTop:20}}>
                 {isSaving?<CircularProgress/>:""}
                 <Button variant="contained" color="secondary" onClick={handleSaveData}  disabled={isSaving}>
                     Save
                 </Button>
             </div>
         </div>
     )
 }
