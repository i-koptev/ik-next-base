import React, { useState } from "react"
import { useRouter } from "next/router"
import useTranslation from "next-translate/useTranslation"
import Headroom from "react-headroom"
import clsx from "clsx"

import { makeStyles, useTheme } from "@material-ui/styles"
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"

import Link from "../../../../components/Link"

import TwoDimentionalMenu from "./components/TwoDimentionalMenu"

import cmsdata from "../../../../cms"

const { nodes: menuItems } = cmsdata.data.menus.topbarMenu.menuItems

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.layouts.Main.Topbar.backgroundColor,
        backgroundColor: "transparent", // needs to be transparent for ReactHeadroom colors to work
        boxShadow: theme.layouts.Main.Topbar.boxShadow,
    },
    logo: {
        color: theme.layouts.Main.Topbar.logoColor,
        textDecoration: "none !important",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1rem",
        // marginBottom: "-5.818px",
        padding: "0",
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
        backgroundColor: "tomato",
    },
    notificationButton: {
        marginLeft: theme.spacing(1),
        backgroundColor: "tomato",
    },

    langSwitcherButton: {
        color: theme.layouts.Main.Topbar.langSwitcherButtonColor,
        "&:hover": {
            // backgroundColor: "transparent",
            outline: `2px solid ${theme.layouts.Main.Topbar.langSwitcherButtonHoverOutlineColor}`,
            color: theme.layouts.Main.Topbar.langSwitcherButtonHoverColor,
        },
        "& .MuiButton-label": {
            letterSpacing: "0.02rem",
        },
        transition: "color 500ms linear",
    },
    langSwitcherButtonPinned: {
        color: "white",
        transition: "color 100ms linear",
    },
    toolbar: {
        minHeight: "56px",
        [theme.breakpoints.up("sm")]: {
            minHeight: "64px",
        },
    },
    headroom: {
        "& .headroom": {
            transition:
                "background-color 500ms linear, border-bottom 500ms linear",
            backgroundColor: theme.layouts.Main.Topbar.backgroundColor,
            borderBottom: theme.mainNavigationBorderBottom,
            position: "fixed",
            width: "100%",
        },
        "& .headroom--pinned": {
            backgroundColor: theme.layouts.Main.Topbar.pinnedBackgroundColor,
            borderBottom: theme.mainNavigationPinnedBorderBottom,
        },
    },
    drawerIcon: {
        color: theme.layouts.Main.Topbar.burgerColor,
        marginRight: "0.9rem",
        marginLeft: "0.9rem",
        height: "28px",
        width: "28px",
    },
    drawerIconContainer: {
        paddingRight: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
}))

const TopbarHeadroom = (props) => {
    const { className, toggleSidebar, ...rest } = props

    const classes = useStyles()
    const theme = useTheme()
    const router = useRouter()

    const [notifications, setNotifications] = useState(23)

    const { t, lang } = useTranslation("common")

    const [pinned, setPinned] = useState(false)

    return (
        <Headroom
            onPin={() => {
                setPinned(true)
                console.log("Pinned: ", pinned)
            }}
            onUnpin={() => {
                // setPinned(false)
                console.log("Unpinned: ", pinned)
            }}
            onUnfix={() => {
                setPinned(false)
                console.log("unfixed")
            }}
            wrapperStyle={{ height: "100px" }}
            variant="header"
            className={classes.headroom}
        >
            <AppBar
                {...rest}
                className={clsx(classes.root, className)}
                position="static"
            >
                <Container maxWidth={theme.siteContainer.maxWidth}>
                    <Toolbar
                        component="nav"
                        disableGutters
                        classes={{ root: classes.toolbar }}
                    >
                        {/* <Link href="/" className={classes.logo}> */}
                        <img
                            onClick={() => router.push(`/`)}
                            src="/logo-iks.svg"
                            alt=""
                            style={{
                                height: "64px",
                                width: "64px",
                                cursor: "pointer",
                            }}
                        />
                        {/* IK-Base */}
                        {/* </Link> */}
                        <div className={classes.flexGrow} />
                        <Hidden mdDown>
                            <TwoDimentionalMenu menuItems={menuItems} />
                        </Hidden>
                        {router.locales
                            .filter((locale) => locale !== lang)
                            .map((locale) => (
                                <Button
                                    key={locale}
                                    className={clsx(
                                        {
                                            [classes.langSwitcherButtonPinned]: pinned,
                                        },
                                        classes.langSwitcherButton
                                    )}
                                    href={router.asPath}
                                    locale={locale}
                                    component={Link}
                                >
                                    {locale.toUpperCase()}
                                </Button>
                            ))}
                        {/* <Hidden mdDown>
                            <IconButton
                                className={classes.notificationButton}
                                color="inherit"
                            >
                                <Badge
                                    // badgeContent={notifications.length}
                                    badgeContent={notifications}
                                    // color="primary"
                                    color="error"
                                    // variant="dot"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                className={classes.signOutButton}
                                color="inherit"
                            >
                                <InputIcon />
                            </IconButton>
                        </Hidden> */}
                        {/* <Hidden lgUp> */}
                        <IconButton
                            className={classes.drawerIconContainer}
                            color="inherit"
                            onClick={toggleSidebar(true)}
                        >
                            <MenuIcon className={classes.drawerIcon} />
                        </IconButton>
                        {/* </Hidden> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Headroom>
    )
}

export default TopbarHeadroom
