import React from "react"

import useTranslation from "next-translate/useTranslation"

import { makeStyles, useTheme } from "@material-ui/styles"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"

import Link from "../../../../../../components/Link"

const useStyles = makeStyles((theme) => ({
    mainNavigationLink: {
        transition: "color 200ms linear",
        textDecoration: "none",
        // textTransform: "uppercase",
        textTransform: "capitalize",
        marginRight: "1rem",
        color: theme.layouts.Main.Topbar.mainNavigationLinkColor,
        fontWeight: 400,
        letterSpacing: "0.15em",
        "&::after": {
            content: '""',
            width: "100%",
            height: "1px",
            margin: "0 auto",
            backgroundColor:
                theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
            display: "block",
            // margin-bottom: .3rem;
            opacity: "0",
            transitionDuration: "500ms",
            transitionProperty: "opacity",
        },
        "&:hover": {
            color: theme.layouts.Main.Topbar.mainNavigationLinkHoverColor,
            "&::after": {
                opacity: "0.5",
            },
        },
        "&$active": {
            color: theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
            "&:hover": {
                cursor: "default",
                // color:
                //     theme.layouts.Main.Topbar
                //         .mainNavigationLinkActiveHoverColor,
                "&::after": {
                    opacity: "1",
                },
            },
            "&::after": {
                content: '""',
                width: "100%",
                height: "1px",
                margin: "0 auto",
                backgroundColor:
                    theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
                display: "block",
                // margin-bottom: .3rem;
                opacity: "1",
                transitionDuration: "500ms",
                transitionProperty: "opacity",
            },
        },
    },
    menu: {
        backgroundColor: "tomato",
        color: "white",
        borderRadius: 0,
    },
    menuItem: {
        opacity: "0.7",
        "&:hover": {
            backgroundColor: "transparent",
            // color: "yellow",
            opacity: "1",
            // ...theme.typography.tab
        },
        "&$active": {
            backgroundColor: "maroon",
            color: "white",
        },
    },
    active: { color: "lime " },
    expandIcon: {
        position: "relative",
        top: "3px",
        left: "1px",
    },
}))

const TwoDimentionalMenu = (props) => {
    const { menuItems } = props

    const classes = useStyles()
    const theme = useTheme()

    const { t, lang } = useTranslation("common")

    const [
        anchorElement,
        setAnchorElement,
    ] = React.useState<null | HTMLElement>(null)

    const myRefs = React.useRef([])

    const [open, setOpen] = React.useState<boolean>(false)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    const handleClose = (e) => {
        setAnchorElement(null)
        setOpen(false)
    }
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElement(event.currentTarget)
        setOpen(true)
    }

    const handleListKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === "Tab") {
            event.preventDefault()
            setOpen(false)
        }
    }

    //** ==========================================================================
    //* Jason Bahl's function --> https://docs.wpgraphql.com/getting-started/menus/
    //** ==========================================================================

    const flatListToHierarchical = (
        data = [],
        { idKey = "key", parentKey = "parentId", childrenKey = "children" } = {}
    ) => {
        const tree = []
        const childrenOf = {}
        data.forEach((item) => {
            const newItem = { ...item }
            const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
            childrenOf[id] = childrenOf[id] || []
            newItem[childrenKey] = childrenOf[id]
            parentId
                ? (childrenOf[parentId] = childrenOf[parentId] || []).push(
                      newItem
                  )
                : tree.push(newItem)
        })
        return tree
    }
    // ** ===================================================================

    // return focus to the button when we transitioned from !open -> open
    // const prevOpen = React.useRef(open)
    // React.useEffect(() => {
    //     if (prevOpen.current === true && open === false) {
    //         anchorRef.current!.focus()
    //     }

    //     prevOpen.current = open
    // }, [open])

    return (
        <>
            {flatListToHierarchical(menuItems).map((menuItem, i) =>
                !menuItem.children.length ? ( //no childern
                    <Link
                        key={`key-${menuItem.key}`}
                        naked
                        className={classes.mainNavigationLink}
                        activeClassName={classes.active}
                        href={
                            menuItem.url === "/"
                                ? menuItem.url
                                : `/${menuItem.url.replace(/\//g, "")}/`
                        }
                    >
                        {t(
                            `topbarMenu-${menuItem.url.replace(
                                /\//g,
                                ""
                            )}-title`
                        )}
                    </Link>
                ) : (
                    <React.Fragment key={`key-${menuItem.key}`}>
                        <Link
                            // ref={anchorRef}
                            ref={(el) => (myRefs.current[i] = el)}
                            aria-controls={
                                open ? `menu-${menuItem.title}` : undefined
                            }
                            aria-haspopup="true"
                            // aria-owns={
                            //     anchorEl
                            //         ? // ? `menu-${menuItem.title}`
                            //           "menu-list-grow"
                            //         : undefined
                            // }
                            // aria-haspopup={
                            //     anchorEl ? "true" : undefined
                            // }
                            onClick={handleToggle}
                            onMouseOver={(e) => handleClick(e)}
                            onMouseLeave={handleClose}
                            naked
                            className={classes.mainNavigationLink}
                            activeClassName={classes.active}
                            href={
                                menuItem.url === "/"
                                    ? menuItem.url
                                    : `/${menuItem.url.replace(/\//g, "")}/`
                            }
                        >
                            {t(
                                `topbarMenu-${menuItem.url.replace(
                                    /\//g,
                                    ""
                                )}-title`
                            )}
                            {open &&
                            (anchorElement === myRefs.current[i] ||
                                anchorElement === myRefs.current[i + 1024]) ? (
                                <ExpandLessIcon
                                    fontSize="inherit"
                                    className={classes.expandIcon}
                                />
                            ) : (
                                <ExpandMoreIcon
                                    fontSize="inherit"
                                    className={classes.expandIcon}
                                />
                            )}
                        </Link>
                        <Popper
                            open={
                                open &&
                                (anchorElement === myRefs.current[i] ||
                                    anchorElement === myRefs.current[i + 1024])
                            }
                            // anchorEl={anchorRef.current}
                            anchorEl={myRefs.current[i]}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    timeout={100}
                                    style={{
                                        transformOrigin:
                                            placement === "bottom"
                                                ? "center top"
                                                : "center bottom",
                                    }}
                                >
                                    <Paper
                                        className={classes.menu}
                                        elevation={0}
                                    >
                                        <ClickAwayListener
                                            onClickAway={handleClose}
                                        >
                                            <MenuList
                                                variant="menu"
                                                ref={(el) =>
                                                    (myRefs.current[
                                                        i + 1024
                                                    ] = el)
                                                }
                                                autoFocusItem={open}
                                                id={`menu-${menuItem.title}`}
                                                onKeyDown={handleListKeyDown}
                                                onMouseLeave={handleClose}
                                                onMouseOver={(e) =>
                                                    handleClick(e)
                                                }
                                            >
                                                {menuItem.children.map(
                                                    (child) => (
                                                        <MenuItem
                                                            key={`key-${child.key}`}
                                                            onClick={
                                                                handleClose
                                                            }
                                                            component={Link}
                                                            naked
                                                            href={child.url}
                                                            activeClassName={
                                                                classes.active
                                                            }
                                                            classes={{
                                                                root:
                                                                    classes.menuItem,
                                                            }}
                                                        >
                                                            {/^common/.test(
                                                                t(
                                                                    `topbarMenu-${menuItem.url.replace(
                                                                        /\//g,
                                                                        ""
                                                                    )}-subTitle-${child.url.replace(
                                                                        /\//g,
                                                                        ""
                                                                    )}`
                                                                )
                                                            )
                                                                ? child.url
                                                                : t(
                                                                      `topbarMenu-${menuItem.url.replace(
                                                                          /\//g,
                                                                          ""
                                                                      )}-subTitle-${child.url.replace(
                                                                          /\//g,
                                                                          ""
                                                                      )}`
                                                                  )}
                                                        </MenuItem>
                                                    )
                                                )}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </React.Fragment>
                )
            )}
        </>
    )
}

export default TwoDimentionalMenu
