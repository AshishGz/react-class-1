import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer/Drawer";
import List from "@material-ui/core/List/List";
import Divider from "@material-ui/core/Divider/Divider";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            openDrawer:false
        }
    }
    render() {


        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            onClick={()=>this.setState({openDrawer:true})}
                            edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">
                            Whether Data
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer anchor="left"
                        open={this.state.openDrawer}
                onClose={()=>this.setState({openDrawer:false})}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>

                </Drawer>
            </div>
        );
    }
}

export default Header;
