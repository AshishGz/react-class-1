import React, {useEffect, useState} from 'react';
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";

export default function CoustomDialog(props) {

    const [open,setOpen]=useState(false);

    function handleClose() {
        props.onCloseDialouige();

    }

    useEffect(()=>{
        setOpen(props.openDialouge)
    },[props.openDialouge]);

    return(
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">Alert!!!!!</DialogTitle>
                <DialogContent>
                    {props.dialougeContent}
                </DialogContent>
            </Dialog>
        </div>
    )

}
