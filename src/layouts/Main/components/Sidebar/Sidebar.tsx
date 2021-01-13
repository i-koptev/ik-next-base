import React from "react"
import clsx from "clsx"
import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.layouts.Main.Sidebar.backgroundColor,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: theme.layouts.Main.Sidebar.dividerColor,
    },
    nav: {
        marginBottom: theme.spacing(2),
    },
    drawer: {
        width: 290,
        [theme.breakpoints.up("lg")]: {
            // marginTop: 64,
            // height: "calc(100% - 64px)", // needed only if drawer is seen on >lg screens
            height: "100%",
        },
    },
}))

const Sidebar = (props) => {
    const { open, variant, toggleSidebar } = props
    const classes = useStyles()

    const list = () => (
        <div
            role="presentation"
            onClick={toggleSidebar(false)}
            onKeyDown={toggleSidebar(false)}
        >
            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    )
                )}
            </List>
            <Divider className={classes.divider} />
            <List>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    )

    return (
        <div>
            <SwipeableDrawer
                variant={variant}
                anchor="left"
                open={open}
                onClose={toggleSidebar(false)}
                onOpen={toggleSidebar(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={clsx(classes.root)}>
                    <Divider className={classes.divider} />
                    {list()}
                </div>
            </SwipeableDrawer>
        </div>
    )
}

export default Sidebar
