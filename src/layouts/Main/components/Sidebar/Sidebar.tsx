import { makeStyles } from "@material-ui/core/styles"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"

import SidebarNav from "./components/SidebarNav"

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 290,
        color: "#ccc",
        // backgroundColor: theme.layouts.Main.Sidebar.backgroundColor,
        backgroundColor: "#232323",
        [theme.breakpoints.up("lg")]: {
            // marginTop: 64,
            // height: "calc(100% - 64px)", // needed only if drawer is seen on >lg screens
            height: "100%",
        },
    },
}))

const Sidebar = (props) => {
    const classes = useStyles()

    const { open, variant, toggleSidebar } = props

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
                <SidebarNav toggleSidebar={toggleSidebar} />
            </SwipeableDrawer>
        </div>
    )
}

export default Sidebar
