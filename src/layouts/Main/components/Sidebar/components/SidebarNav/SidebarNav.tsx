import React from "react"
import Link from "../../../../../../components/Link"
import clsx from "clsx"
import useTranslation from "next-translate/useTranslation"

import { makeStyles } from "@material-ui/core/styles"

import List from "@material-ui/core/List"
import ListSubheader from "@material-ui/core/ListSubheader"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { MenuItem } from "@material-ui/core"

import Collapse from "@material-ui/core/Collapse"
import Divider from "@material-ui/core/Divider"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import DraftsIcon from "@material-ui/icons/Drafts"
import SendIcon from "@material-ui/icons/Send"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import StarBorder from "@material-ui/icons/StarBorder"

import { flatListToHierarchical } from "../../../../../../lib/functions"

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.layouts.Main.Sidebar.backgroundColor,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        // padding: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: theme.layouts.Main.Sidebar.dividerColor,
    },
    nav: {
        marginBottom: theme.spacing(2),
    },

    drawerItem: {
        // ...theme.typography.tab
        color: "inherit",
        "&:hover": {
            backgroundColor: "rgba(255, 0,0,0.5)",
            color: "white",
        },
        "&.active": {
            backgroundColor: "rgba(255, 0,0,0.3)",
            color: "white",
        },

        // fontFamily: "Arial",
    },
    drawerIcon: {
        color: "inherit",
    },
    drawerDivider: {
        // borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        borderBottom: "1px solid rgba(255,255, 255, 0.12)",
        backgroundClip: "padding-box",
    },
}))

import cmsdata from "../../../../../../cms"
const { nodes: menuItems } = cmsdata.data.menus.sidebarMenu.menuItems

const SidebarNav = (props) => {
    const { toggleSidebar } = props
    const classes = useStyles()
    const { t, lang } = useTranslation("common")

    const renderMenuItem = (menuItem, index, level) => {
        if (menuItem.children && menuItem.children.length) {
            return renderSubMenu(menuItem, index, level, true)
        } else {
            return (
                <ListItem
                    component={Link}
                    href={menuItem.url}
                    naked
                    button
                    divider
                    key={menuItem.key}
                    classes={{ divider: classes.drawerDivider }}
                    className={classes.drawerItem}
                    style={{ paddingLeft: `${level * 20 + 15}px` }}
                >
                    {level === 0 ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                    ) : null}
                    <ListItemText disableTypography>
                        {/* <ListItemText> */}
                        {level + 1}.{index} - {menuItem.title[lang]}
                    </ListItemText>
                </ListItem>
            )
        }
    }
    const renderSubMenu = (menuItem, index, level, hasSubMenu) => {
        return (
            <React.Fragment key={menuItem.key}>
                <ListItem
                    component={Link}
                    href={menuItem.url}
                    naked
                    button
                    divider
                    classes={{ divider: classes.drawerDivider }}
                    className={classes.drawerItem}
                    style={{ paddingLeft: `${level * 20 + 15}px` }}
                >
                    {level === 0 ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                    ) : null}
                    <ListItemText disableTypography>
                        {/* <ListItemText> */}
                        {level + 1}.{index} - {menuItem.title[lang]}
                    </ListItemText>
                    {hasSubMenu ? (
                        <ListItemIcon className={classes.drawerIcon}>
                            <ExpandMore />
                        </ListItemIcon>
                    ) : null}
                </ListItem>
                {
                    ((level += 1),
                    menuItem.children.map((item, index) => {
                        return renderMenuItem(item, index, level)
                    }))
                }
            </React.Fragment>
        )
    }

    return (
        <div
            role="presentation"
            onClick={toggleSidebar(false)}
            onKeyDown={toggleSidebar(false)}
        >
            <List
                disablePadding
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        style={{
                            color: "#eee",
                            textAlign: "center",
                            letterSpacing: "0.2em",
                            paddingTop: "1rem",
                            paddingBottom: "1rem",
                            fontSize: "1.2rem",
                            textTransform: "uppercase",
                            backgroundColor: "#333",
                        }}
                    >
                        {t(`sidebarMenuTitle`)}
                    </ListSubheader>
                }
            >
                {flatListToHierarchical(menuItems).map((menuItem, index) => {
                    if (menuItem.children.length) {
                        return renderSubMenu(menuItem, index, 0, true)
                    } else {
                        return renderMenuItem(menuItem, index, 0)
                    }
                })}
            </List>
            {/* <Divider className={classes.divider} /> */}
            <pre>
                {/* {JSON.stringify(flatListToHierarchical(menuItems), null, 2)} */}
            </pre>
        </div>
    )
}

export default SidebarNav
