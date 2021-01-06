import React from "react"
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import logo from "../../public/logo-iks"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbarMargin: {
            ...theme.mixins.toolbar,
        },
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            marginLeft: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            color: theme.palette.common.white,
        },
    })
)

export default function ButtonAppBar() {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <div className={classes.root}>
            {/* <AppBar position="static"> */}
            <AppBar>
                <Toolbar disableGutters>
                    {/* <img src="/logo-iks.svg" style={{ height: "54px" }} /> */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        height="50px"
                    >
                        <path
                            d="M50 8.5A41.5 41.5 0 118.5 50 41.55 41.55 0 0150 8.5M50 0a50 50 0 1050 50A50 50 0 0050 0z"
                            fill="#ffffff"
                        />
                        <path
                            d="M70.5 29.5v41h-41v-41h41M79 21H21v58h58V21z"
                            fill="#ffffff"
                        />
                    </svg>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
            <p>
                Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Unde ut magni quis, molestiae et magnam. Necessitatibus,
                neque dicta magni velit facere, quis iste sint dignissimos
                rerum, qui incidunt mollitia! Quaerat deleniti nemo asperiores
                dolor necessitatibus. Doloremque debitis aperiam ratione hic
                totam dicta maxime sint dolorem! Saepe, facilis tempora. Qui
                incidunt impedit delectus necessitatibus rem porro, atque
                dolorem consectetur? Possimus iste modi incidunt vitae nesciunt,
                non aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita error quibusdam iure rerum nam
                possimus aut animi tempora iusto cum, officiis eaque vero soluta
                deleniti corporis ipsa nobis sunt! Fuga! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio alias nemo hic
                veritatis, consectetur illum cupiditate enim fugiat. Voluptatem
                perferendis accusantium beatae reiciendis soluta dolorem rerum
                quae perspiciatis non sunt odio quod eum incidunt ipsum fugiat
                repellat, exercitationem dolorum sed voluptatum neque quam,
                consectetur possimus? A maxime atque ducimus itaque iusto
                cupiditate, consectetur nemo laborum eum facere incidunt vero
                odio quisquam sit sint labore tempore saepe magni, commodi
                praesentium animi quo.
            </p>{" "}
            <p>
                Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Unde ut magni quis, molestiae et magnam. Necessitatibus,
                neque dicta magni velit facere, quis iste sint dignissimos
                rerum, qui incidunt mollitia! Quaerat deleniti nemo asperiores
                dolor necessitatibus. Doloremque debitis aperiam ratione hic
                totam dicta maxime sint dolorem! Saepe, facilis tempora. Qui
                incidunt impedit delectus necessitatibus rem porro, atque
                dolorem consectetur? Possimus iste modi incidunt vitae nesciunt,
                non aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita error quibusdam iure rerum nam
                possimus aut animi tempora iusto cum, officiis eaque vero soluta
                deleniti corporis ipsa nobis sunt! Fuga! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio alias nemo hic
                veritatis, consectetur illum cupiditate enim fugiat. Voluptatem
                perferendis accusantium beatae reiciendis soluta dolorem rerum
                quae perspiciatis non sunt odio quod eum incidunt ipsum fugiat
                repellat, exercitationem dolorum sed voluptatum neque quam,
                consectetur possimus? A maxime atque ducimus itaque iusto
                cupiditate, consectetur nemo laborum eum facere incidunt vero
                odio quisquam sit sint labore tempore saepe magni, commodi
                praesentium animi quo.
            </p>
            <p>
                Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Unde ut magni quis, molestiae et magnam. Necessitatibus,
                neque dicta magni velit facere, quis iste sint dignissimos
                rerum, qui incidunt mollitia! Quaerat deleniti nemo asperiores
                dolor necessitatibus. Doloremque debitis aperiam ratione hic
                totam dicta maxime sint dolorem! Saepe, facilis tempora. Qui
                incidunt impedit delectus necessitatibus rem porro, atque
                dolorem consectetur? Possimus iste modi incidunt vitae nesciunt,
                non aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita error quibusdam iure rerum nam
                possimus aut animi tempora iusto cum, officiis eaque vero soluta
                deleniti corporis ipsa nobis sunt! Fuga! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio alias nemo hic
                veritatis, consectetur illum cupiditate enim fugiat. Voluptatem
                perferendis accusantium beatae reiciendis soluta dolorem rerum
                quae perspiciatis non sunt odio quod eum incidunt ipsum fugiat
                repellat, exercitationem dolorum sed voluptatum neque quam,
                consectetur possimus? A maxime atque ducimus itaque iusto
                cupiditate, consectetur nemo laborum eum facere incidunt vero
                odio quisquam sit sint labore tempore saepe magni, commodi
                praesentium animi quo.
            </p>
            <p>
                Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Unde ut magni quis, molestiae et magnam. Necessitatibus,
                neque dicta magni velit facere, quis iste sint dignissimos
                rerum, qui incidunt mollitia! Quaerat deleniti nemo asperiores
                dolor necessitatibus. Doloremque debitis aperiam ratione hic
                totam dicta maxime sint dolorem! Saepe, facilis tempora. Qui
                incidunt impedit delectus necessitatibus rem porro, atque
                dolorem consectetur? Possimus iste modi incidunt vitae nesciunt,
                non aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita error quibusdam iure rerum nam
                possimus aut animi tempora iusto cum, officiis eaque vero soluta
                deleniti corporis ipsa nobis sunt! Fuga! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio alias nemo hic
                veritatis, consectetur illum cupiditate enim fugiat. Voluptatem
                perferendis accusantium beatae reiciendis soluta dolorem rerum
                quae perspiciatis non sunt odio quod eum incidunt ipsum fugiat
                repellat, exercitationem dolorum sed voluptatum neque quam,
                consectetur possimus? A maxime atque ducimus itaque iusto
                cupiditate, consectetur nemo laborum eum facere incidunt vero
                odio quisquam sit sint labore tempore saepe magni, commodi
                praesentium animi quo.
            </p>
            <p>
                Hello world Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Unde ut magni quis, molestiae et magnam. Necessitatibus,
                neque dicta magni velit facere, quis iste sint dignissimos
                rerum, qui incidunt mollitia! Quaerat deleniti nemo asperiores
                dolor necessitatibus. Doloremque debitis aperiam ratione hic
                totam dicta maxime sint dolorem! Saepe, facilis tempora. Qui
                incidunt impedit delectus necessitatibus rem porro, atque
                dolorem consectetur? Possimus iste modi incidunt vitae nesciunt,
                non aspernatur Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Expedita error quibusdam iure rerum nam
                possimus aut animi tempora iusto cum, officiis eaque vero soluta
                deleniti corporis ipsa nobis sunt! Fuga! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Velit odio alias nemo hic
                veritatis, consectetur illum cupiditate enim fugiat. Voluptatem
                perferendis accusantium beatae reiciendis soluta dolorem rerum
                quae perspiciatis non sunt odio quod eum incidunt ipsum fugiat
                repellat, exercitationem dolorum sed voluptatum neque quam,
                consectetur possimus? A maxime atque ducimus itaque iusto
                cupiditate, consectetur nemo laborum eum facere incidunt vero
                odio quisquam sit sint labore tempore saepe magni, commodi
                praesentium animi quo.
            </p>{" "}
        </div>
    )
}
