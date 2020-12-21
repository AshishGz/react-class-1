import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Card from "@material-ui/core/Card/Card";
 export default function UserProfile() {
     const [userProfile,setUserProfile]=useState({name:"",address:"",email:""});

     function handelChange(event) {
         userProfile[event.target.id]=event.target.value;
         setUserProfile({...userProfile,userProfile});
     }

     return (
         <div>
             <Grid container  spacing={2}>
                     <Grid item xs="6" sm="4">
                         <TextField
                             id="name"
                             label="Enter Name"
                             variant="outlined"
                             color="secondary"
                             value={userProfile.name}
                             placeholder="Enter Name"
                             helperText="Please Enter Valid Name"
                             error={false}
                             disabled={false}
                             onChange={handelChange}
                             fullWidth={true}
                         />
                     </Grid>
                 <Grid item xs="6" sm="4">
                         <TextField
                             id="address"
                             label="Enter Address"
                             variant="outlined"
                             color="secondary"
                             value={userProfile.address}
                             placeholder="Enter Address"
                             helperText="Please Enter Valid Address"
                             error={false}
                             disabled={false}
                             onChange={handelChange}
                             fullWidth={true}
                         />
                     </Grid>
                 <Grid item xs="6" sm="4">
                     <TextField
                         id="email"
                         label="Enter Email"
                         variant="outlined"
                         color="secondary"
                         value={userProfile.email}
                         placeholder="Enter Email"
                         helperText="Please Enter Valid Email"
                         error={false}
                         disabled={false}
                         onChange={handelChange}
                         fullWidth={true}
                     />
                 </Grid>
             </Grid>
             <Card>
                 <Grid container  spacing={2}>
                     <Grid item xs="6" sm="6">Name</Grid>
                     <Grid item xs="6" sm="4">{userProfile.name}</Grid>
                 </Grid>
                 <Grid container  spacing={2}>
                     <Grid item xs="6" sm="6">Address</Grid>
                     <Grid item xs="6" sm="4">{userProfile.address}</Grid>
                 </Grid>
                 <Grid container  spacing={2}>
                     <Grid item xs="6" sm="6">Email</Grid>
                     <Grid item xs="6" sm="4">{userProfile.email}</Grid>
                 </Grid>
             </Card>
         </div>
     )
 }
